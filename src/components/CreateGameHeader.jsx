import React, { useContext, useEffect } from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getStorageDeckInfos } from '../services/localStorage';

function CreateGameHeader() {
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);

  useEffect(() => {
    if (getStorageDeckInfos() !== null && deckConfig.deckName === '') {
      setDeckConfig(getStorageDeckInfos());
    }
  }, []);

  return (
    <header className="p-3 w-screen flex flex-col justify-center gap-5 items-center bg-gradient-to-r from-stone-600 to-stone-900 text-white font-mono sm:flex-row">
      <Link to="/">
        <HomeIcon className="h-10 w-16 text-white cursor-pointer" />
      </Link>
      <p>
        Nome do baralho:
        {' '}
        <span className="text-yellow-400">{deckConfig.deckName}</span>
      </p>
      <p>
        Criador do baralho:
        {' '}
        <span className="text-yellow-400">{deckConfig.creatorName}</span>
      </p>
    </header>
  );
}

export default CreateGameHeader;
