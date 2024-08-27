/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    'src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        shadows: 'Shadows Into Light, cursive'
      }
    },
  },
  plugins: [],
}
