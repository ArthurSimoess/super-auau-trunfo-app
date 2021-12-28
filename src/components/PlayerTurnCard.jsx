import React from 'react'

function PlayerTurnCard({ playerName }) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-60">
        <div className="flex flex-col items-center border-black border-4 p-3 rounded-md bg-gradient-to-r from-green-300 to-blue-400 font-bold text-sm sm:text-lg">
          <p>Jogador da rodada: </p>
          <p>{ playerName }</p>
        </div>
    </div>
  )
}

export default PlayerTurnCard;
