/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,vue,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#5F6FFF',
        customBlueDark: '#4B54CC', 
      }
    },
  },
  plugins: [],
}

