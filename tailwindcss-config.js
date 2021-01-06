module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-950": "#1c2e61",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
