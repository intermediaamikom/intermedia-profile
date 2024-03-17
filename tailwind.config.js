/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
        fontFamily: {
          'montserrat': ['Montserrat'],
          display: ['"Space Grotesk"'],
      },
        backgroundImage: {
           'hero_pattern': "url('assets/INTERMEDIA 3.svg')"
      },
        colors: {
          primary: '#1E5120',
          grayColor : '#DDE2EA',
          blackColor : '#2E422F',
          lightGreenColor: '#43FF4A',
         }
    },
    
  },
  plugins: [],
}

