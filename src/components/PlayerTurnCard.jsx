import PropTypes from 'prop-types';
import React from 'react';
import card from '../images/cardslogo.png';

function PlayerTurnCard({ playerName }) {
  return (
    <div className="flex justify-center items-center bg-yellow-200 border-1 border-black rounded-lg px-2">
      <img src={card} alt="Cartas de baralho" width="80px" />
      <p className="m-0 shadow-logo text-4xl font-bold">{`Jogador: ${playerName}`}</p>
    </div>
  );
}

PlayerTurnCard.propTypes = {
  playerName: PropTypes.string.isRequired,
};

export default PlayerTurnCard;
