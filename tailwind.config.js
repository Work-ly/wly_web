const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#121214',
      'purple-primary-dark': '#3A2C58',
      'purple-secondary-dark': '#4A3870',
      'purple-primary-light': '#8A72BD',
      'purple-secondary-light': '#614E8A',
      'yellow': '#BDB871',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}
