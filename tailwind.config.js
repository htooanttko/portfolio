/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D352A',
        secondary: '#BB9E7C',
        tertiary: '#FFFFFF'
      }
    },
  },
  plugins: [],
};
