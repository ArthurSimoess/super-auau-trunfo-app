import React from 'react';
import RenderGame from '../components/RenderGame';
import { getDeck } from '../services/localStorage';

function CustomTrunfoPage() {
  const customDeck = getDeck().sort(() => Math.random() - 0.5);

  return (
    <div className="bg-container h-screen overflow-auto">
      <RenderGame
        deck={customDeck}
      />
    </div>
  );
}

export default CustomTrunfoPage;
