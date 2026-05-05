/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Tajawal"', "system-ui", "sans-serif"],
        latin: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#0a1628",
        "navy-light": "#152a52",
        gold: "#d4a737",
        "gold-dark": "#b8901f",
      },
    },
  },
  plugins: [],
};
