import PropTypes from 'prop-types';
import React from 'react';

function GameCard({
  name, img, description, firstAttr, secondAttr,
  thirdAttr, rarity, cardTrunfo, handleClick, disabled,
}) {
  return (
    <main>
      <section className="flex flex-col items-center h-auto border-solid border-8 border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl w-80 text-white">
        <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-10 mt-3 rounded-t-xl flex justify-center items-center">
          <p>{ name }</p>
        </div>
        <div className="w-11/12 h-44 ronded-xl">
          <img src={img} alt={name} className="h-44 w-full" />
        </div>
        <div className="p-2 bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-28">
          <p className="text-justify">{ description }</p>
        </div>
        <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-16 rounded-b-xl flex justify-around items-center font-bold shadow-lg border-t-4">
          <label htmlFor="first">
            <input
              type="button"
              name="mordida"
              value={`Mordida: ${firstAttr}`}
              className="py-2 px-1 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white disabled:opacity-40 disabled:cursor-not-allowed rounded-xl cursor-pointer text-black font-bold"
              onClick={handleClick}
              disabled={disabled}
            />
          </label>
          <label htmlFor="second">
            <input
              type="button"
              name="fome"
              value={`Fome: ${secondAttr}`}
              className="py-2 px-1  bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white disabled:opacity-40 disabled:cursor-not-allowed rounded-xl cursor-pointer text-black font-bold"
              onClick={handleClick}
              disabled={disabled}
            />
          </label>
          <label htmlFor="third">
            <input
              type="button"
              name="fofura"
              className="py-2 px-1 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white disabled:opacity-40 disabled:cursor-not-allowed rounded-xl cursor-pointer text-black font-bold"
              value={`Fofura: ${thirdAttr}`}
              onClick={handleClick}
              disabled={disabled}
            />
          </label>
        </div>
        <div className="bg-black w-2/4 text-white text-center mt-4 rounded-t-xl p-1">
          <p className="m-0">{ rarity }</p>
        </div>
        { cardTrunfo
              && (
              <div className="rounded-full bg-gradient-to-r from-amber-200 to-yellow-800 border-black border-solid border-4 w-20 h-20 flex items-center absolute mt-36 ml-36">
                <p className="text-center -rotate-12 text-black font-bold">
                  Super Trunfo
                </p>
              </div>
              )}
      </section>
    </main>
  );
}

GameCard.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  firstAttr: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  secondAttr: PropTypes.string.isRequired,
  thirdAttr: PropTypes.string.isRequired,
};

export default GameCard;
