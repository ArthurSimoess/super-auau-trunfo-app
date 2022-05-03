import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { getStorageDeckInfos } from '../services/localStorage';
import deck from '../images/cardslogo.png';
import creator from '../images/creator.png';

function CreateGameHeader() {
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);

  useEffect(() => {
    if (getStorageDeckInfos() !== null && deckConfig.deckName === '') {
      setDeckConfig(getStorageDeckInfos());
    }
  }, []);

  return (
    <header className="p-1 w-screen flex flex-col items-end sm:justify-center gap-5 sm:items-center bg-yellow-200 text-white font-mono sm:flex-row">
      <div className="flex items-center w-72 sm:w-60 lg:w-96">
        <img src={deck} alt="Baralho de cartas" width="60px" />
        <p className="m-0 text-2xl text-black font-bold">
          Nome do baralho:
          <span className="text-black font-bold uppercase m-0">{deckConfig.deckName}</span>
        </p>
      </div>
      <div className="flex items-center w-72 sm:w-60 lg:w-[25.5rem]">
        <img src={creator} alt="Ícone de usuário" width="60px" />
        <p className="m-0 text-2xl text-black font-bold">
          Criador do baralho:
          <span className="text-black uppercase font-bold m-0">{deckConfig.creatorName}</span>
        </p>
      </div>
    </header>
  );
}

export default CreateGameHeader;
