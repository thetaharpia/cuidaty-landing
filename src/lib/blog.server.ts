const API_URL = import.meta.env.BLOG_API_URL as string;
const API_KEY = import.meta.env.BLOG_API_KEY as string;

export const DEFAULT_COVER = '/default-blog.png';

export interface BlogPost {
  id: number;
  title: string;
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

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}?page=1`, { headers: headers() });
    if (!res.ok) return [];
    const json = (await res.json()) as { data: BlogPost[] };
    return json.data.slice(0, limit);
  } catch {
    return [];
  }
}

export async function getAllPosts(page = 1): Promise<{ posts: BlogPost[]; meta: BlogMeta }> {
  const res = await fetch(`${API_URL}?page=${page}`, { headers: headers() });
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const json = (await res.json()) as { data: BlogPost[]; meta: BlogMeta };
  return { posts: json.data, meta: json.meta };
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  try {
    const res = await fetch(`${API_URL}/${slug}`, { headers: headers() });
    if (!res.ok) return null;
    return (await res.json()) as BlogPostFull;
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const slugs: string[] = [];
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
  const words = html.replace(/<[^>]+>/g, '').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
