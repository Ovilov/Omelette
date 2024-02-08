/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans"],
      serif: ["Young Serif", "serif"],
    },
    extend: {
      backgroundColor: {
        main__pink: ["#F3E5D7"],
        cnow: ["#FFF7FB"],
      },
      colors: {
        "wenge-brown": "#5F564D",
        raspberry: ["#7A284E"],
        brandy: ["#854632"],
      },
    },
  },
  plugins: [],
};
