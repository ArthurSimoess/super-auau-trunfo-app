module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Card-game': "url('/src/images/cardGame.jpeg')",
        'Card-Dark': "url('/src/images/cardsPhoto.jpg')",
      }
    },
  },
  plugins: [],
}