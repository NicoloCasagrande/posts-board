/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'normal': '0 2px 8px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}

