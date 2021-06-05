const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      blue: {
        600: '#000a52',
        stack: '#000C66',
        500: '#00118d',
        400: '#0015b4',
        300: '#001cef',
      },
      red: {
        600: '#c21525',
        stack: '#e5192c',
        500: '#f9051c',
        400: '#ea3c4c',
        300: '#ee5f6c',
      },
      gray: colors.trueGray,
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        'left': 'left',
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
