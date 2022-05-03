import React from 'react';
import RenderGame from '../components/RenderGame';
import sortDeckdog from '../data/DogTrunfo';

function DogTrunfoPage() {
  return (
    <div className="bg-container h-screen overflow-auto">
      <RenderGame
        deck={sortDeckdog}
      />
    </div>
  );
}

export default DogTrunfoPage;
