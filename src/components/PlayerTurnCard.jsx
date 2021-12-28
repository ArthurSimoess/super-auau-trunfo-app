import React from 'react'

function PlayerTurnCard({ playerName }) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-60">
        <div className="flex items-center gap-1 border-black border-4 p-3 rounded-md bg-gradient-to-r from-green-200 to-blue-300 font-bold text-lg">
          <p>Faça sua jogada</p>
          <p className="underline">{ playerName }</p>
        </div>
    </div>
  )
}

export default PlayerTurnCard;
