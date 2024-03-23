/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        rajdhani:['Rajdhani']
      },
      colors: {
        'game-border': 'rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
}

