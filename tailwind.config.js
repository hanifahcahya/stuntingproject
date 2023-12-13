/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c2c7c",
        secondary: "#F2E9E4",
        accent: "#000000",
        success: "#47b881",
        danger: "#e3342f",
        info: "#3490dc",
        warning: "#ffed4a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
