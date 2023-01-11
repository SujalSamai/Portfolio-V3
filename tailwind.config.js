/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bl: "#111111",
        lbl: "#282A3A",
        gr: "#ba9043",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        martian: ["Martian Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
