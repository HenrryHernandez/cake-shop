/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: "#f00",
        blue: "#00f",
        green: "#0f0",
        pink: "#f0f",
        cyan: "#0ff",
        yellow: "#ff0",
      },
      colors: {
        red: "#f00",
        blue: "#00f",
        green: "#0f0",
        pink: "#f0f",
        cyan: "#0ff",
        yellow: "#ff0",
        transparent: "transparent",
        current: "currentColor",
        original: "#ed546e",
        "grey-high": "#8d8d8d",
        "grey-medium": "#e7e7e7",
        "grey-high": "#eaeaea",
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
