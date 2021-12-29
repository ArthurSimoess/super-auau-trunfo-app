import React from 'react'

function PlayerTurnCard({ playerName }) {
  return (
    <div className="flex justify-center items-center gap-10 w-72">
      <div className="flex items-center gap-2 border-black border-4 p-3 rounded-md bg-gradient-to-r from-gray-200 to-gray-600 font-bold text-lg">
        <p>Faça sua jogada</p>
        <div className="flex items-center gap-1">
          <i className="fas fa-arrow-right"></i>
          <p className="text-white">{ playerName }</p>
          <i className="fas fa-arrow-left"></i>
        </div>
      </div>
    </div>
  )
}

export default PlayerTurnCard;
