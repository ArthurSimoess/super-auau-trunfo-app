import React from 'react'

function DetailsCard({ name, attrName, attrValue, playerTurn }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center border-black border-4 p-3 rounded-md bg-gradient-to-r from-green-300 to-blue-400 font-bold text-sm sm:text-lg">
        <p>Vencedor da Rodada:</p>
        <p className="text-xl">{ name }</p>
      </div>
      <div className="flex flex-col items-center p-3 border-black border-4 rounded-md bg-gradient-to-r from-green-300 to-blue-400 font-bold text-sm sm:text-lg">
        <p>Detalhes da Partida:</p>
        <p>{ playerTurn } escolheu o atributo {attrName} com valor {attrValue}</p>
      </div>
    </div>
  )
}

export default DetailsCard;

