/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

function Card({
  name, description, firstAttr, secondAttr, thirdAttr, img, rarity, cardTrunfo,
}) {
  return (
    <section className="flex flex-col items-center h-auto w-72 border-solid border-8 border-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-white shadow-md sm:w-72 md:w-72 lg:w-72 text-white">
      <div className="bg-gradient-to-r from-gray-400 to-gray-800 w-11/12 h-10 mt-3 rounded-t-xl flex justify-center items-center">
        <p>{ name }</p>
      </div>
      <div className="w-11/12 h-44 ronded-xl">
        <img src={img} alt={name} className="h-44 w-full" />
      </div>
      <div className="bg-gradient-to-r from-gray-400 to-gray-800 w-11/12 h-28">
        <p className="text-justify p-3">{ description }</p>
      </div>
      <div className="bg-gradient-to-r from-gray-400 to-gray-800 w-11/12 h-12 rounded-b-xl flex justify-around items-center font-bold shadow-lg border-t-4">
        <p>{ `Atk: ${firstAttr} ` }</p>
        <p>|</p>
        <p>{ `Def: ${secondAttr}` }</p>
        <p>|</p>
        <p>{ `Vel: ${thirdAttr}` }</p>
      </div>
      <div className="bg-white w-2/4 text-black text-center mt-5 rounded-t-xl p-1">
        <p>{ rarity }</p>
      </div>
      { cardTrunfo && (
        <div className="rounded-full bg-gradient-to-r from-amber-200 to-yellow-800 border-black border-solid border-4 w-20 h-20 flex items-center absolute mt-36 ml-36">
          <p className="text-center -rotate-12 text-black font-bold">
            Super Trunfo
          </p>
        </div>
      )}
    </section>
  );
}

Card.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  firstAttr: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  secondAttr: PropTypes.string.isRequired,
  thirdAttr: PropTypes.string.isRequired,
};

export default Card;
