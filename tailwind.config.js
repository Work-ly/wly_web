const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      
      'purple-primary-dark': '#3B2864',
      'purple-secondary-dark': '#50328F',
      'purple-primary-light': '#9B80D3',
      'purple-secondary-light': '#614E8A',
      'white': '#FFFFFF',
      'dark': '#171618',
      'black': '#000000',
      'dark-02': '#111012',
      'light-gray': '#BABABA'
    },
    fontSize: {
      xs: '0.85rem',
      sm: '1rem',
      md: '1.2rem',
      base: '1.1rem',
      lg: '1.5rem',
      xl: '2rem',
      xl2:'3.2rem',
      xll: '5rem',
    },
    extend: {},
  },
  plugins: [],
  
}
