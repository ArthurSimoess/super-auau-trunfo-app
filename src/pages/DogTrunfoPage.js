import React from 'react';
import RenderGame from '../components/RenderGame';
import deckDog from '../data/DogTrunfo';

function DogTrunfoPage() {
  const deckDogTrunfo = deckDog.sort(() => Math.random() - 0.5);

  return (
    <div className="bg-bones bg-cover">
      <RenderGame
        deck={deckDogTrunfo}
      />
    </div>
  );
}

export default DogTrunfoPage;
