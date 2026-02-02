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
  server: {
    port: 4321,
    host: true,
  },
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
