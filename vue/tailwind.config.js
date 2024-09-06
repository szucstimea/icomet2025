/** @type {import('tailwindcss').Config} */
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
  },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

