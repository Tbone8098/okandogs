/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#819BF8",
        "primary-2": "#D23E3A"
      },
    },
    fontFamily: {
      "f1": ['Jura']
    }
  },  
  plugins: [],
}
