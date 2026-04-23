import GhostContentAPI from '@tryghost/content-api';

const url = import.meta.env.GHOST_API_URL;
const key = import.meta.env.GHOST_CONTENT_API_KEY;

const api = url && key
  ? new GhostContentAPI({
      url,
      key,
      version: 'v5.0',
    })
  : null;

export interface GhostPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  url: string;
  reading_time: number;
  tags?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

const FALLBACK_POSTS: GhostPost[] = [
  {
    id: 'fallback-1',
    title: 'Por um Ano Todo Amarelo: A Importância da Terapia na Preservação da Vida',
    slug: 'por-um-ano-todo-amarelo-a-importancia-da-terapia-na-preservacao-da-vida-apatia-x-depressao',
    excerpt:
      'Uma reflexão importante sobre saúde mental e prevenção ao suicídio. Entenda a diferença entre apatia e depressão e como a terapia pode ser fundamental na preservação da vida.',
    feature_image:
      'https://blog.thetaharpia.com/content/images/2024/09/setembro-amarelo-blog.jpg',
    published_at: '2024-09-20T10:00:00.000Z',
    url: 'https://blog.thetaharpia.com/por-um-ano-todo-amarelo-a-importancia-da-terapia-na-preservacao-da-vida-apatia-x-depressao/',
    reading_time: 5,
    tags: [
      {
        id: 'tag-1',
        name: 'Saúde Mental',
        slug: 'saude-mental',
      },
    ],
  },
];

export async function getLatestPosts(limit = 3): Promise<GhostPost[]> {
  if (!api) return FALLBACK_POSTS.slice(0, limit);

  try {
    const posts = await api.posts.browse({
      limit,
      include: ['tags'],
      fields: [
        'id',
        'title',
        'slug',
        'excerpt',
        'feature_image',
        'published_at',
        'url',
        'reading_time',
      ],
      filter: 'tag:-startuppsi',
    });

    return posts as GhostPost[];
  } catch (error) {
    return FALLBACK_POSTS.slice(0, limit);
  }
}

export async function getPostsByTag(tag: string, limit = 3): Promise<GhostPost[]> {
  if (!api) return [];

  try {
    const posts = await api.posts.browse({
      limit,
      include: ['tags'],
      filter: `tag:${tag}+tag:-startuppsi`,
      fields: [
        'id',
        'title',
        'slug',
        'excerpt',
        'feature_image',
        'published_at',
        'url',
        'reading_time',
      ],
    });

    return posts as GhostPost[];
  } catch (error) {
    return [];
  }
}

export { api as ghostApi };
