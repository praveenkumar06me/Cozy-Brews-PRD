/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          100: '#F5E6E0',
          200: '#E6D5CC',
          300: '#D4A88C',
          400: '#8B4513',
          500: '#5C3317',
        }
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}