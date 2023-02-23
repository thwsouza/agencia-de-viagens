/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '340px',
        tablet: '768px'
      }
    }
  },
  plugins: []
}
