/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-one-red': '#E63946',
        'palette-one-blue': '#14213d',
        'palette-one-white': '#e5e5e5',
        'palette-one-celeste': '#14213d'
      }
    },
  },
  plugins: [],
}
