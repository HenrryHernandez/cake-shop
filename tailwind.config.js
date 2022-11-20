/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      original: "#ed546e",
      "grey-high": "#8d8d8d",
      "grey-medium": "#e7e7e7",
      "grey-high": "#eaeaea",
      black: "#000",
      white: "#fff",
    },
    screens: {
      phone: "440px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      screen: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
