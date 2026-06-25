import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#F5D87A',
          400: '#E8C547',
          500: '#D4AF37',
          600: '#C9A227',
          700: '#A07820',
        },
      },
    },
  },
  plugins: [],
}
export default config
