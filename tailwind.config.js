/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{
      mobile: '375px',
      tablet:'768px',
      lg:'950px'
    },
    extend: {},
  },
  plugins: [],
}
