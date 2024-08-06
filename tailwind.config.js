/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color:{
        primary:'#161622',
        secondary:{
            DEFAULT:'FF9C01#',
            100: '#FF9001',
            200: '#FF9C01'
        },
        black: {
          DEFAULT: '#000',
          100:'#1E1E2D',
          200:'#232533'
        },
        gray:{
          100:'#CDCDE0'
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextraligth: ["Poppins-ExtraLigt", "san-serif"],
        plight:["Poppins-Ligt", "san-serif"],
        pregular:["Poppins-Regular", "san-serif"],
        pmedium:["Poppins-Medium", "san-serif"],
        psemibold:["Poppins-Semibold", "san-serif"],
        pbold:["Poppins-Bold", "san-serif"],
        pextrabold:["Poppin-ExtreBold", "san-serif"],
        pblack:["Poppins-Black", "san-serif"]
      }
    },
  },
  plugins: [],
}

