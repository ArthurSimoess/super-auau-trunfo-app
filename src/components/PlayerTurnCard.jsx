import PropTypes from 'prop-types';
import React from 'react';
import card from '../images/cardslogo.png';

function PlayerTurnCard({ playerName }) {
  return (
    <div className="flex justify-center items-center">
      <img src={card} alt="Cartas de baralho" />
      <p className="shadow-logo text-4xl font-bold">{`Sua vez de jogar ${playerName}`}</p>
    </div>
  );
}

PlayerTurnCard.propTypes = {
  playerName: PropTypes.string.isRequired,
};

export default PlayerTurnCard;
