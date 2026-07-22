import { localPosts } from './posts.local';

const API_URL = import.meta.env.BLOG_API_URL as string;
const API_KEY = import.meta.env.BLOG_API_KEY as string;

export const DEFAULT_COVER = '/default-blog.png';

export interface BlogPost {
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string;
  author: { name: string };
  tags: Array<{ name: string; slug: string }>;
  seo: {
    meta_title: string | null;
    meta_description: string | null;
    og_image_url: string | null;
    canonical_url: string | null;
  };
}

export interface BlogPostFull extends BlogPost {
  content_html: string;
}

export interface BlogMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

function headers(): HeadersInit {
  return { Authorization: `Bearer ${API_KEY}` };
}

function byDateDesc(a: BlogPost, b: BlogPost): number {
  return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  let apiPosts: BlogPost[] = [];
  try {
    const res = await fetch(`${API_URL}?page=1`, { headers: headers() });
    if (res.ok) apiPosts = ((await res.json()) as { data: BlogPost[] }).data;
  } catch {
    // segue só com os posts locais
  }
  return [...localPosts, ...apiPosts].sort(byDateDesc).slice(0, limit);
}

export async function getAllPosts(page = 1): Promise<{ posts: BlogPost[]; meta: BlogMeta }> {
  const res = await fetch(`${API_URL}?page=${page}`, { headers: headers() });
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const json = (await res.json()) as { data: BlogPost[]; meta: BlogMeta };

  if (page !== 1 || localPosts.length === 0) {
    return { posts: json.data, meta: json.meta };
  }

  return {
    posts: [...localPosts, ...json.data].sort(byDateDesc),
    meta: { ...json.meta, total: json.meta.total + localPosts.length },
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  const local = localPosts.find((p) => p.slug === slug);
  if (local) return local;

  try {
    const res = await fetch(`${API_URL}/${slug}`, { headers: headers() });
    if (!res.ok) return null;
    return (await res.json()) as BlogPostFull;
  } catch {
    return null;
  }
}

export async function getAllPostsFlat(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [...localPosts];
  let page = 1;
  while (true) {
    const res = await fetch(`${API_URL}?page=${page}`, { headers: headers() });
    if (!res.ok) break;
    const json = (await res.json()) as { data: BlogPost[]; meta: BlogMeta };
    posts.push(...json.data);
    if (page >= json.meta.last_page) break;
    page++;
  }
  return posts.sort(byDateDesc);
}

export async function getAllSlugs(): Promise<string[]> {
  const slugs: string[] = localPosts.map((p) => p.slug);
  let page = 1;
  while (true) {
    const res = await fetch(`${API_URL}?page=${page}`, { headers: headers() });
    if (!res.ok) break;
    const json = (await res.json()) as { data: BlogPost[]; meta: BlogMeta };
    slugs.push(...json.data.map((p) => p.slug));
    if (page >= json.meta.last_page) break;
    page++;
  }
  return slugs;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function readingTime(html: string): number {
  const words = wordCount(html);
  return Math.max(1, Math.round(words / 200));
}

export function wordCount(html: string): number {
  return html
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Adiciona ids âncora aos títulos h2/h3 do conteúdo do post e devolve o
 * sumário. Ids ajudam na navegação (legibilidade) e dão alvos citáveis para
 * mecanismos de IA (GEO).
 */
export function enhanceContent(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();

  const enhanced = html.replace(
    /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return match;

      const existing = attrs.match(/\sid=["']([^"']+)["']/i);
      let id = existing ? existing[1] : slugify(text);
      if (!id) return match;

      const base = id;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);

      const level = tag.toLowerCase() === 'h2' ? 2 : 3;
      toc.push({ id, text, level });

      const cleanAttrs = attrs.replace(/\sid=["'][^"']*["']/i, '');
      return `<${tag}${cleanAttrs} id="${id}">${inner}</${tag}>`;
    }
  );

  return { html: enhanced, toc };
}
