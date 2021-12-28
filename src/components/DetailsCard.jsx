import React from 'react'

function DetailsCard({ name, attrName, attrValue, playerTurn }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-white font-bold text-xl">Vencedor da Rodada:</p>
      <div className="flex flex-col items-center border-black border-4 p-3 rounded-md bg-gradient-to-r from-green-200 to-blue-300 font-bold text-lg">
        <p className="text-xl">{ name }</p>
      </div>
      <p className="text-white font-bold text-xl pt-5">Detalhes da Partida:</p>
      <div className="flex flex-col gap-2 items-center p-3 w-60 border-black border-4 rounded-md bg-gradient-to-r from-green-200 to-blue-300 font-bold text-lg">
        <p className="text-justify">{ playerTurn } escolheu o atributo {attrName} com valor {attrValue}</p>
      </div>
    </div>
  )
}

export default DetailsCard;

