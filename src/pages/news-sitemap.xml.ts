import type { APIRoute } from 'astro';
import { getAllPostsFlat, isNewsPost, isWithinNewsWindow, type BlogPost } from '../lib/blog.server';

const SITE = 'https://cuidaty.com';

// Nome da publicação exatamente como cadastrado no Google Publisher Center.
// Divergência aqui é motivo comum de o feed ser ignorado.
const PUBLICATION_NAME = 'Blog Cuidaty';
// ISO 639-1 de duas letras: a spec do Google News não aceita 'pt-BR' aqui.
const PUBLICATION_LANGUAGE = 'pt';

// O Google só considera para a aba Notícias o que foi publicado nas últimas
// 48h, mas mantém a URL indexada por 30 dias e ignora (sem penalizar) o que
// estiver fora da janela. Usamos 30 dias para o arquivo não zerar entre
// publicações.
const NEWS_WINDOW_HOURS = 30 * 24;

// Um `<urlset>` sem nenhuma `<url>` é reportado como sitemap vazio pelo Search
// Console, então o feed cai para as notícias mais recentes quando nenhuma está
// dentro da janela. O fallback ignora o tempo, nunca o critério: publicar
// conteúdo perene num feed de News é o que faz o Google descartar o feed
// inteiro, o que sai mais caro que o aviso de sitemap vazio.
const FALLBACK_LIMIT = 5;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function hasValidDate(post: BlogPost): boolean {
  return !Number.isNaN(new Date(post.published_at).getTime());
}

/**
 * Sitemap no formato do Google News: canal de descoberta rápida das
 * publicações recentes, não um índice do site. O índice completo continua
 * no `sitemap-index.xml`.
 *
 * Renderizado a cada requisição (output: 'server') para que a janela de tempo
 * seja sempre real, e não a do momento do build.
 */
export const GET: APIRoute = async () => {
  const posts = (await getAllPostsFlat()).filter(hasValidDate);

  const newsPosts = posts.filter(isNewsPost);
  const withinWindow = newsPosts.filter((post) => isWithinNewsWindow(post, NEWS_WINDOW_HOURS));
  // `getAllPostsFlat` já devolve ordenado do mais novo para o mais antigo.
  const entries = withinWindow.length > 0 ? withinWindow : newsPosts.slice(0, FALLBACK_LIMIT);

  const urls = entries
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
      // A janela muda sozinha com o tempo: cache curto para não envelhecer.
      'Cache-Control': 'public, max-age=600',
    },
  });
};
