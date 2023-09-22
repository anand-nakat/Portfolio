/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-950": "#0d2467",
        "gray-850": "#101010",
        "gray-950": "#131417",
        card: "#1e1e20",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}
