/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        rose: {
          50: '#f0f7f7',
          100: '#e1efee',
          200: '#c9e4e2',
          300: '#b2d8d5',
          400: '#8fc4bf',
          500: '#6baaa4',
          600: '#518b86',
          700: '#40706c',
          800: '#345b58',
          900: '#294a47',
          950: '#192e2c',
        },
      },
    },
  },
  plugins: [],
};