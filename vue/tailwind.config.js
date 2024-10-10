/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-uni': "url('./src/assets/img/rektori_mod1.jpg')",
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        exo: ['"Exo+2"', 'sans-serif'], //index.css -> import
        saira: ["Saira", 'sans-serif'],
        ubuntuCondensed: ['Ubuntu Condensed', 'sans-serif'],
      },
  },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

