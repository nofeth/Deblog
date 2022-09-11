/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,html}"],
  theme: {
    container : {
      center : true
    },
    extend: {
      fontFamily : {
        'playfair' : ['Playfair Display','serif'],
        'combo' : ['Combo','cursive']
      }
    },
  },
  plugins: [],
}
