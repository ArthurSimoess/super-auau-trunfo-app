module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Card-game': "url('/src/images/cardGame.jpeg')",
        'Card-Dark': "url('/src/images/cardsPhoto.jpg')",
        'Search-Back': "url('/src/images/searchBack.jpg')",
        'Game-Time': "url('/src/images/gameTime.jpg')",
      }
    },
  },
  plugins: [],
}