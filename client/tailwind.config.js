/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        // add more custom angles if needed
      },
    },
    screens: {
      exs:"250px",
      sm: '425px',
      md: '763px',
      lg: '1024px',
      xl: '1440px',
      ExtraLarge:'2560px'
    },
  },
  plugins: [],
}

