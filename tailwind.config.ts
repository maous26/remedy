import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette naturelle RootsRemedy
        earth: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#d4c4a8',
          400: '#bda67e',
          500: '#a68b5b',
          600: '#8b7049',
          700: '#6f583c',
          800: '#5a4733',
          900: '#4a3c2d',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e4ebe4',
          200: '#c9d7c9',
          300: '#a3b9a3',
          400: '#7a9a7a',
          500: '#5a7d5a',
          600: '#466346',
          700: '#394f39',
          800: '#2f412f',
          900: '#283528',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf2de',
          200: '#f4e3bc',
          300: '#ecce8f',
          400: '#e2b35f',
          500: '#d99b3a',
          600: '#c4812e',
          700: '#a36428',
          800: '#854f27',
          900: '#6e4224',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fceae4',
          200: '#f9d5c9',
          300: '#f4b8a3',
          400: '#ec9072',
          500: '#e2694a',
          600: '#cd502f',
          700: '#ac4027',
          800: '#8e3724',
          900: '#763223',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
