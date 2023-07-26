/** @type {import('tailwindcss').Config} */
export default {
  content: require[('./index.html', './src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {
      fontFamily: {
        Anuphan: ['Anuphan', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
