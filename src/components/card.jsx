import React from 'react';

function Card ({ name, description, firstAttr, secondAttr, thirdAttr,img, rarity, cardTrunfo }) {;
  return(
    <main className="w-8/12 text-white flex items-center justify-center">
      <section className="flex flex-col items-center h-1/2 w-2/4 border-solid border-8 border-white bg-violet-400">
        <div className="bg-rose-400 w-11/12 h-10 mt-3 rounded-xl flex justify-center items-center">
          <p>{ name }</p>
        </div>
          <div className="w-11/12 h-40 rounded-xl">
            <img src={ img } alt={ name } className="h-40 w-12/12"/>
          </div>
          <div>
            <p>{ description }</p>
          </div>
        <div>
          <p>{ firstAttr }</p>
          <p>{ secondAttr }</p>
          <p>{ thirdAttr }</p>
        </div>
        <div>
          <p>{ rarity }</p>
          { cardTrunfo  && <p>Super Trunfo</p> }
        </div>

      </section>
    </main>
  )
}

export default Card;