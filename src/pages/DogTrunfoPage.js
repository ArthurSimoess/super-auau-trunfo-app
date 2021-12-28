import React, {useEffect} from "react";
import RenderGame from "../components/RenderGame";
import { deckDog } from '../data/DogTrunfo'
import { useLocation } from "react-router-dom";


function DogTrunfoPage() {
  const deckDogTrunfo = deckDog.sort(() => Math.random() - 0.5 )

  return(
    <div className="bg-Dice bg-cover bg-center">
      <RenderGame
        deck={ deckDogTrunfo }
      />
    </div>
  )
}

export default DogTrunfoPage;