/**
 * Clínicas que escolheram aparecer na lista pública do Cuidaty. Vêm da API do
 * app (a mesma URL base e a mesma chave do blog) e só entram as que o próprio app já filtrou: portal
 * ligado, unidade ativa e consentimento da clínica.
 */
export interface DirectoryClinic {
  name: string;
  city: string | null;
  state: string | null;
  url: string;
  logoUrl: string | null;
  /** Opcionais na API: clínicas sem texto ou sem profissionais com especialidade vêm vazias. */
  description: string | null;
  specialties: string[];
}

export interface ClinicGroup {
  state: string;
  clinics: DirectoryClinic[];
}

const BLOG_API_URL = import.meta.env.BLOG_API_URL as string | undefined;
const API_KEY = import.meta.env.BLOG_API_KEY as string | undefined;

/** Mesma API e mesma chave do blog: `.../api/v1/blog` vira `.../api/v1/clinics`. */
const API_URL = BLOG_API_URL?.replace(/\/blog\/?$/, '/clinics');

const TIMEOUT_MS = 5000;
const CACHE_TTL_MS = 10 * 60 * 1000;
const NO_STATE = 'Outros estados';

let cache: { at: number; clinics: DirectoryClinic[] } | null = null;

function text(value: unknown): string | null {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

function webUrl(value: unknown): string | null {
  const candidate = text(value);
  if (candidate === null) return null;

  try {
    const { protocol } = new URL(candidate);
    return protocol === 'https:' || protocol === 'http:' ? candidate : null;
  } catch {
    return null;
  }
}

const MAX_SPECIALTIES = 6;

function textList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const items = value.map(text).filter((item): item is string => item !== null);
  return [...new Set(items)].slice(0, MAX_SPECIALTIES);
}

/** Descarta o que não tem nome ou endereço utilizável: a página nunca quebra por um item. */
function normalize(item: unknown): DirectoryClinic | null {
  if (typeof item !== 'object' || item === null) return null;
  const raw = item as Record<string, unknown>;
  const name = text(raw.name);
  const url = webUrl(raw.url);
  if (name === null || url === null) return null;

  return {
    name,
    city: text(raw.city),
    state: text(raw.state)?.toUpperCase() ?? null,
    url,
    logoUrl: webUrl(raw.logo_url),
    description: text(raw.description),
    specialties: textList(raw.specialties),
  };
}

/**
 * A lista, com cache em memória. Se a API falhar, serve a última lista boa; sem
 * ela, uma lista vazia (a página trata o vazio), nunca um erro.
 */
export async function getDirectoryClinics(): Promise<DirectoryClinic[]> {
  if (!API_URL || !API_KEY) return [];
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.clinics;

  try {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${API_KEY}`, Accept: 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return cache?.clinics ?? [];

    const json = (await res.json()) as { data?: unknown };
    const clinics = (Array.isArray(json.data) ? json.data : [])
      .map(normalize)
      .filter((clinic): clinic is DirectoryClinic => clinic !== null);

    cache = { at: Date.now(), clinics };
    return clinics;
  } catch {
    return cache?.clinics ?? [];
  }
}

/** Agrupa por UF, em ordem alfabética, com as clínicas de cada uma por cidade e nome. */
export function groupByState(clinics: DirectoryClinic[]): ClinicGroup[] {
  const groups = new Map<string, DirectoryClinic[]>();

  for (const clinic of clinics) {
    const key = clinic.state ?? NO_STATE;
    groups.set(key, [...(groups.get(key) ?? []), clinic]);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => (a === NO_STATE ? 1 : b === NO_STATE ? -1 : a.localeCompare(b, 'pt-BR')))
    .map(([state, list]) => ({
      state,
      clinics: [...list].sort(
        (a, b) =>
          (a.city ?? '').localeCompare(b.city ?? '', 'pt-BR') ||
          a.name.localeCompare(b.name, 'pt-BR')
      ),
    }));
}
