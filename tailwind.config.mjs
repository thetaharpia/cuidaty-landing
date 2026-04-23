/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cuidaty: {
          dark: '#0c202f',
          primary: '#356588',
          'primary-hover': '#2a5070',
          secondary: '#5ac3b0',
          accent: '#a7e9a5',
          'accent-light': '#ddfdbe',
          light: '#f8fafc',
          gray: '#e2e8f0',
        },
        beige: {
          DEFAULT: '#F4F1EA',
          dark: '#EBE7DD',
        },
        'mission-blue': '#0C202F',
        'teal-light': '#CEEDE8',
        background: '#fbfbf9',
        foreground: '#0f1c26',
        border: '#e6e4df',
        input: '#fbfbf9',
        ring: '#356588',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f1c26',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f1c26',
        },
        primary: {
          DEFAULT: '#356588',
          foreground: '#ffffff',
          hover: '#2a5070',
        },
        secondary: {
          DEFAULT: '#5ac3b0',
          foreground: '#0c202f',
          hover: '#4ab3a0',
        },
        muted: {
          DEFAULT: '#f0f4f8',
          foreground: '#475569',
        },
        accent: {
          DEFAULT: '#f1efe9',
          foreground: '#0f1c26',
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
          'Figtree',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        serif: ['Besley', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
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
      boxShadow: {
        soft: '0 1px 2px rgba(12, 32, 47, 0.04), 0 4px 12px rgba(12, 32, 47, 0.06)',
        lifted: '0 2px 4px rgba(12, 32, 47, 0.05), 0 12px 32px rgba(12, 32, 47, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
