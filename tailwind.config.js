/* eslint-disable quote-props */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Card-game': "url('/src/images/cardGame.jpeg')",
        'bones': "url('/src/images/bones.jpg')",
        'dog-play': "url('/src/images/dogsplay.jpg')",
        'Search-Back': "url('/src/images/searchBack.jpg')",
        'Pika-Chico': "url('/src/images/pikachico.png')",
        'Custom-Deck': "url('/src/images/customdeck.png')",
      },
    },
  },
  plugins: [],
};
