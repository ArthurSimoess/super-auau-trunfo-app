import React from 'react';
import trophy from '../images/trophy.png';

function TieResult() {
  return (
    <div className="flex justify-center gap-8 pt-16 md:gap-16">
      <img src={trophy} alt="Troféu" className="w-10 md:w-40" />
      <div className="flex flex-col items-center pt-10 gap-5 font-bol">
        <p className="text-violet-600 md:text-5xl">EMPATE</p>
      </div>
      <img src={trophy} alt="Troféu" className="w-10 md:w-40" />
    </div>
  );
}

export default TieResult;
