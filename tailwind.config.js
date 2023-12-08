/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#29B6FE',
        secondary: '#D71D4E',
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
