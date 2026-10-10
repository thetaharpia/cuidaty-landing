// Tailwind 3 pelo PostCSS: o Astro 7 lê este arquivo direto (a integração @astrojs/tailwind só ia até o Astro 5).
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
