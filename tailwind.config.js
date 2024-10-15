/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        favela: ['Favela-r', 'sans-serif'], // Aggiungi qui il tuo font personalizzato
      },
    },
  },
  plugins: [],
}
