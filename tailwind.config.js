/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
      animation: {
        fadeInOut: "fadeInOut 10s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "10%, 90%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
