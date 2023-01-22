const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/wave_1.svg')",
      },
      aspectRatio: {
        hero: "4/1",
      },
    },
    colors: {
      darkPurple: "#2c04a3",
      pink: "#c383f8",
      dark: "#1a1a1a",
      grey: "#d1d1d1",
    },
    fontFamily: {
      sans: ["Palatino Linotype", "serif"],
    },
  },
  plugins: [],
};
