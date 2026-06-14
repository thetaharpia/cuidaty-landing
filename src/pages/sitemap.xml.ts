import type { APIRoute } from 'astro';

// O @astrojs/sitemap gera `/sitemap-index.xml` (+ `/sitemap-0.xml`).
// Muitas ferramentas e pessoas tentam `/sitemap.xml` por convenção — este
// endpoint redireciona para o índice canônico para não retornar 404.
export const GET: APIRoute = ({ redirect }) => redirect('/sitemap-index.xml', 301);
