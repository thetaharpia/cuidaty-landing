import type { BlogPostFull } from './blog.server';

/**
 * Posts escritos direto no código, sem passar pela API do blog.
 * Cada post precisa do mesmo shape que a API retorna, com o corpo
 * já em HTML (`content_html`).
 */
export const localPosts: BlogPostFull[] = [
  // {
  //   id: -1,
  //   title: 'Título do post',
  //   slug: 'titulo-do-post',
  //   excerpt: 'Resumo curto que aparece no card e no meta description.',
  //   cover_image_url: null,
  //   published_at: '2026-07-20T00:00:00.000Z',
  //   author: { name: 'Equipe Cuidaty' },
  //   tags: [{ name: 'Exemplo', slug: 'exemplo' }],
  //   seo: {
  //     meta_title: null,
  //     meta_description: null,
  //     og_image_url: null,
  //     canonical_url: null,
  //   },
  //   content_html: '<p>Conteúdo do post em HTML.</p>',
  // },
];
