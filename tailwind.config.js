const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      lg: '1124px'
    },
    extend: {
      zIndex: {
        500: '500'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
