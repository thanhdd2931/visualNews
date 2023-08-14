/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'lt': '960px',
        // => @media (min-width: 960px) { ... }
        'tb': '780px',
        // => @media (min-width: 780px) { ... }
        'mb': '0px',
        // => @media (min-width: 0px) { ... }
        'mmb': '600px'

      },
      boxShadow: {
        'bottom': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

