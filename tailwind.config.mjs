/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cuidaty: {
          dark: '#0c202f',
          primary: '#356588',
          'primary-hover': '#2d5d80',
          secondary: '#5AC3B0',
          accent: '#a7e9a5',
          light: '#ddfdbe',
          gray: '#e2e8f0',
        },
        background: '#ffffff',
        foreground: '#1a202c',
        border: '#e2e8f0',
        input: '#ffffff',
        ring: '#356588',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1a202c',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1a202c',
        },
        primary: {
          DEFAULT: '#356588',
          foreground: '#ffffff',
          hover: '#2d5d80',
        },
        secondary: {
          DEFAULT: '#5AC3B0',
          foreground: '#ffffff',
          hover: '#4ab3a0',
        },
        muted: {
          DEFAULT: '#f0f4f8',
          foreground: '#475569',
        },
        accent: {
          DEFAULT: '#f8fafb',
          foreground: '#1a202c',
        },
        destructive: {
          DEFAULT: '#d9534f',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f0ad4e',
          foreground: '#472a12',
        },
        success: {
          DEFAULT: '#45c2af',
          foreground: '#ffffff',
        },
        chart: {
          1: '#356588',
          2: '#5ac3b0',
          3: '#a7e9a5',
          4: '#2a5070',
          5: '#ddfdbe',
        },
        sidebar: {
          DEFAULT: '#ffffff',
          foreground: '#0c202f',
          primary: '#356588',
          'primary-foreground': '#ffffff',
          accent: '#f8fafc',
          'accent-foreground': '#356588',
          border: '#e2e8f0',
          ring: '#356588',
        },
      },
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: ['Lora', 'Arapey', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
