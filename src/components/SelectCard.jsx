/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';

function SelectCard({
  data, attrName, valueAttr, win, player,
}) {
  return (
    <main className="flex flex-col gap-2">
      <div>
        <p className={`m-0 w-56 text-2xl font-bold uppercase text-center border-1 border-black px-2 mx-auto rounded-md ${win ? 'bg-green-500' : 'bg-red-500'}`}>{win ? `Vencedor: ${player}` : `Perdedor: ${player}`}</p>
      </div>
      <section className="flex flex-col items-center h-auto w-72 border-solid border-8 border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl sm:w-72 md:w-72 lg:w-72 text-white">
        <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-10 mt-3 rounded-t-xl flex justify-center items-center">
          <p>{ data.name }</p>
        </div>
        <div className="w-11/12 h-44 ronded-xl">
          <img src={data.img} alt={data.name} className="h-44 w-full" />
        </div>
        <div className="p-2 bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-28">
          <p className="text-justify">{ data.description }</p>
        </div>
        <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-16 rounded-b-xl flex justify-around items-center font-bold shadow-lg">
          <p className={`uppercase p-2 border-1 border-white font-bold rounded-sm ${win ? 'bg-green-600' : 'bg-red-600'}`}>
            {`${attrName}: ${valueAttr}`}
          </p>
        </div>
        <div className="bg-black w-2/4 text-white text-center mt-4 rounded-t-xl p-1">
          <p className="m-0">{ data.rarity }</p>
        </div>
        { data.cardTrunfo
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

SelectCard.propTypes = {
  data: PropTypes.any,
  attrName: PropTypes.string.isRequired,
  valueAttr: PropTypes.string.isRequired,
  win: PropTypes.bool.isRequired,
  player: PropTypes.string.isRequired,
};

export default SelectCard;
