/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4D03F',
        container: '#FCF3CF',
        button: '#F4D03F'
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)',
        xl: '0 10px 15px rgba(0, 0, 0, 0.3), 0 20px 25px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
