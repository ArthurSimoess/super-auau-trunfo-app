import React from 'react'


function GameCard({ name, img, description, firstAttr, secondAttr, 
    thirdAttr, rarity, cardTrunfo, handleClick }) {


  return (
    <>
      <main>
        <section className="flex flex-col items-center h-auto w-72 border-solid border-8 border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl sm:w-72 md:w-72 lg:w-72 text-white">
          <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-10 mt-3 rounded-t-xl flex justify-center items-center">
            <p>{ name }</p>
          </div>
          <div className="w-11/12 h-44 ronded-xl">
            <img src={ img } alt={ name } className="h-44 w-full" />
          </div>
          <div className="p-2 bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-28">
            <p className="text-justify">{ description }</p>
          </div>
          <div className="bg-gradient-to-r from-gray-500 to-gray-900 w-11/12 h-16 rounded-b-xl flex justify-around items-center font-bold shadow-lg border-t-4">
            <label htmlFor="first">
              <input
                type="button"
                name="firstAttr"
                value={ `Atk: ${firstAttr}`}
                className="p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white rounded-xl cursor-pointer"
                onClick={ handleClick }
              />
            </label>
            <label htmlFor="second">
              <input
                type="button"
                name="secondAttr"
                value={ `Def: ${secondAttr}` }
                className="p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white rounded-xl cursor-pointer"
                onClick={ handleClick }
              />
            </label>
            <label htmlFor="third">
              <input
                type="button"
                name="thirdAttr"
                className="p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 ring-white rounded-xl cursor-pointer"
                value={ `Vel: ${thirdAttr}` }
                onClick={ handleClick }
              />
            </label>
          </div>
          <div className="bg-black w-2/4 text-white text-center mt-5 rounded-t-xl p-1">
            <p>{ rarity }</p>
          </div>
            { cardTrunfo  && 
              <div className="rounded-full bg-gradient-to-r from-amber-200 to-yellow-800 border-black border-solid border-4 w-20 h-20 flex items-center absolute mt-36 ml-36">
                <p className="text-center -rotate-12 text-black font-bold">
              Super Trunfo
                </p>
              </div> 
            }
        </section>
      </main>
    </>
  )
}

export default GameCard;