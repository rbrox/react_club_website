// tailwind.config.js

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        richBlack: "#D00000",
        redCustom: {
          100: "#9d0208",
          200: "#6A040F",
          300: "#03071e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
