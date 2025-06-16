/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        primary: '#7f00ff',
        secondary: '#6b21a8',
        light: '#e0e0e0',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 5px #7f00ff' },
          'to': { 'box-shadow': '0 0 20px #7f00ff, 0 0 30px #6b21a8' }
        }
      }
    },
  },
  plugins: [],
}