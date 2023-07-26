/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Anuphan: ["Anuphan", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
