import type { APIRoute } from 'astro';
import { getAllPostsFlat, isNewsPost, isWithinNewsWindow } from '../lib/blog.server';

const SITE = 'https://cuidaty.com';

// Nome da publicação exatamente como cadastrado no Google Publisher Center.
// Divergência aqui é motivo comum de o feed ser ignorado.
const PUBLICATION_NAME = 'Blog Cuidaty';
// ISO 639-1 de duas letras: a spec do Google News não aceita 'pt-BR' aqui.
const PUBLICATION_LANGUAGE = 'pt';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Sitemap no formato do Google News. Diferente do sitemap comum, ele lista
 * apenas notícias publicadas nas últimas 48 horas: é um canal de descoberta
 * rápida, não um índice do site. Fora dessa janela o artigo continua no
 * `sitemap-index.xml` normal.
 *
 * Renderizado a cada requisição (output: 'server') para que a janela de tempo
 * seja sempre real, e não a do momento do build.
 */
export const GET: APIRoute = async () => {
  const posts = await getAllPostsFlat();
  const news = posts.filter((post) => isNewsPost(post) && isWithinNewsWindow(post));

  const urls = news
    .map((post) => {
      const loc = `${SITE}/blog/${post.slug}/`;
      const title = escapeXml(post.title);
      const published = new Date(post.published_at).toISOString();

      return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(PUBLICATION_NAME)}</news:name>
        <news:language>${PUBLICATION_LANGUAGE}</news:language>
      </news:publication>
      <news:publication_date>${published}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Janela de 48h muda sozinha: cache curto para o arquivo não envelhecer.
      'Cache-Control': 'public, max-age=600',
    },
  });
};
