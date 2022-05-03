import React from 'react';
import RenderGame from '../components/RenderGame';
import sortDeckdog from '../data/DogTrunfo';

function DogTrunfoPage() {
  return (
    <div className="bg-container h-screen overflow-auto md:flex justify-center items-center">
      <RenderGame
        deck={sortDeckdog}
      />
    </div>
  );
}

export default DogTrunfoPage;
