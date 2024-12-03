/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        basic: ["Poppins", "serif"],
        accent: ["Noto Serif Display", "serif"]
      },
      colors: {
        'custom-white': '#f4e8da',
        'custom-green': '#838a60',
        'custom-orange': '#ba9659'
      },
      fontSize: {
        'fs-900': '4.5rem',
        'fs-800': '3.75rem',
        'fs-700': '3rem',
        'fs-600': '2.25rem',
        'fs-500': '1.875rem',
        'fs-400': '1rem',
        'fs-300': '0.875rem',
        'fs-200': '0.5rem'
      },
      screens: {
       'md': '35em',
       'lg' : '45em',
       'max-35': {max: '34.9em'}
      }
    },
  },
  plugins: [],
}

