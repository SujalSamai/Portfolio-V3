/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bl: "#0a192f",
        lbl: "#112240",
        gr: "#64ffda",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        martian: ["Martian Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
