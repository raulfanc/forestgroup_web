/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Roboto', 'Montserrat', 'Palanquin', 'sans-serif'],
        mono: ['Courier New', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        fadeInOut: 'fadeInOut 10s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '10%, 90%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
