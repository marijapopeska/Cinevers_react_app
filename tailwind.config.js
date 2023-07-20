/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
  darkMode: false, //or media or class
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
      lato: ['lato', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


