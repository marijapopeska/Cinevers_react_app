/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
  darkMode: false, //or media or class
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


