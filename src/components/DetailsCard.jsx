import PropTypes from 'prop-types';
import React from 'react';

function DetailsCard({
  name, attrName, attrValue, playerTurn,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-white font-bold text-xl md:text-3xl">Vencedor da Rodada:</p>
      <div className="flex flex-col items-center border-black border-4 p-3 rounded-3xl bg-gradient-to-r from-yellow-200 to-yellow-600 font-bold text-lg">
        <p className="text-xl md:2xl">
          <i className="fas fa-medal" />
          {' '}
          { name }
        </p>
      </div>
      <p className="text-white font-bold text-xl pt-5 md:text-3xl">Detalhes da Partida:</p>
      <div className="flex flex-col gap-2 items-center p-3 w-60 border-black border-4 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 font-bold text-lg md:2xl">
        <p className="text-justify">
          { playerTurn }
          {' '}
          escolheu o atributo
          {' '}
          {attrName}
          {' '}
          com valor
          {' '}
          {attrValue}
          .
        </p>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  attrName: PropTypes.string.isRequired,
  attrValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playerTurn: PropTypes.string.isRequired,
};

export default DetailsCard;
