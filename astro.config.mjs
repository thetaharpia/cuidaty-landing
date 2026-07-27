// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://cuidaty.com',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  trailingSlash: 'ignore',
  server: {
    port: 4321,
    host: true,
  },
  build: {
    assets: '_astro',
  },
  image: {
    domains: ['cuidaty.com'],
    remotePatterns: [],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  vite: {
    build: {
      cssMinify: 'esbuild', // Changed from lightningcss for better compatibility
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      customPages: [
        'https://app.cuidaty.com/',
        'https://diagnostico.cuidaty.com/',
        // Central de Ajuda: home + hubs de categoria (cross-submission; ambos os
        // domínios precisam estar verificados no mesmo Search Console).
        'https://ajuda.cuidaty.com/',
        'https://ajuda.cuidaty.com/agenda',
        'https://ajuda.cuidaty.com/prontuario',
        'https://ajuda.cuidaty.com/pacientes',
        'https://ajuda.cuidaty.com/comunicacao',
        'https://ajuda.cuidaty.com/transcricao',
        'https://ajuda.cuidaty.com/cuty-ia',
        'https://ajuda.cuidaty.com/financeiro',
        'https://ajuda.cuidaty.com/portal',
        'https://ajuda.cuidaty.com/permissoes',
        'https://ajuda.cuidaty.com/conta',
      ],
      i18n: {
        defaultLocale: 'pt-BR',
        locales: {
          'pt-BR': 'pt-BR',
        },
      },
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
