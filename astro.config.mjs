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
