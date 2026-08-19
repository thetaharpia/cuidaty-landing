export const prerender = true;

import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPostsFlat } from '../../lib/blog.server';

export async function GET(context: APIContext) {
  const posts = await getAllPostsFlat();

  return rss({
    title: 'Blog Cuidaty',
    description:
      'Artigos sobre psicologia, gestão de clínicas e consultórios, saúde mental e tecnologia para profissionais da saúde.',
    site: context.site ?? 'https://cuidaty.com',
    items: posts.map((post) => ({
      title: post.title,
      description: post.seo.meta_description || post.excerpt,
      pubDate: new Date(post.published_at),
      link: `/blog/${post.slug}/`,
      categories: post.tags?.map((tag) => tag.name),
    })),
    customData: '<language>pt-BR</language>',
  });
}
