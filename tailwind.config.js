/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

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
      fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
          serif: ['Rubik', ...defaultTheme.fontFamily.serif],
          comic: ['Comic Sans MS', ...defaultTheme.fontFamily.sans],
      },
  },
  },
  plugins: [require('daisyui')],
  meta: [
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      },
      {
        "charset": "utf-8"
      }
    ],
    "link": [""],
    "style": [],
    "script": [],
    "noscript": []
  
}
