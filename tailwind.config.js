/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myCustomFont: ['MyAvertaStdBold', 'sans-serif'], // Add other fallback fonts as needed
        myCustomFontRegular: ['MyAvertaStdRegular', 'sans-serif']
      },
      colors: {
        "main": "#00b894",
        "customGreyBgColor": "#e9e9e9",
        "customTeal": "#00b894",
        "customBlackFont": "#2d3436",
      },
    },
  },
  plugins: [],
}