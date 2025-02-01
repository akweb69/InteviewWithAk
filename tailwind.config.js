/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ice: ["Iceberg", "sans-serif"],
      },
      colors: {
        c1: "",
      },
    },
  },
  plugins: [require("daisyui")],
};
