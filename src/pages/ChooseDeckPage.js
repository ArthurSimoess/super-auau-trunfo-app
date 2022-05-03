import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getDeck, getStorageDeckInfos } from '../services/localStorage';
import pikachico from '../images/pikachico.png';
import customdeck from '../images/customdeck.png';
import deckDog from '../data/DogTrunfo';
import exit from '../images/exit.png';

function ChooseDeckPage() {
  const history = useHistory();
  const [deck, setDeck] = useState('');
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);

  useEffect(() => {
    if (getDeck() !== null && getDeck().length > 1) {
      setDeck(getDeck());
    }
  }, []);

  useEffect(() => {
    if (getStorageDeckInfos !== null && deckConfig.deckName === '') {
      setDeckConfig(getStorageDeckInfos());
    }
  }, []);

  function handleClick({ target: { name } }) {
    switch (name) {
      case 'dogTrunfo':
        history.push('/gameDogTrunfo');
        break;
      case 'customGame':
        history.push('/gameCustomDeck');
        break;
      default:
        history.push('/');
    }
  }

  function backHome() {
    history.push('/');
    window.location.reload();
  }

  return (
    <div className="bg-container bg-center flex flex-col items-center gap-2 h-screen overflow-auto">
      <button
        className="text-black rounded-lg font-bold absolute left-3 top-3"
        onClick={backHome}
        type="button"
      >
        <img src={exit} alt="exit" className="w-14" />
      </button>
      <div className=" w-screen p-5 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
        <div className="flex flex-col items-center border-solid border-3 border-black rounded-lg shadow-md">
          <img src={pikachico} alt="yorkshire vestido de pikachu" className="w-56 h-72" />
          <div className="flex flex-col items-center gap-1 bg-white w-56 h-48 font-bold">
            <p>Super-Dog-Trunfo</p>
            <p>
              Número de cartas:
              {' '}
              { deckDog.length }
            </p>
            <p>Criador: Arthur Simões</p>
            <button
              type="button"
              name="dogTrunfo"
              className="border-2 border-black p-2 hover:bg-bones"
              onClick={handleClick}
            >
              JOGAR
            </button>
          </div>
        </div>
        { deck !== ''
          && (
          <div className="flex flex-col items-center border-solid border-3 border-black rounded-lg shadow-md">
            <img src={customdeck} alt="Cartas" className="w-56 h-72" />
            <div className="flex flex-col items-center gap-1 bg-white w-56 h-48 font-bold">
              <p>{deckConfig.deckName}</p>
              <p>
                Número de cartas:
                {' '}
                { deck.length }
              </p>
              <p>{`Criador: ${deckConfig.creatorName}`}</p>
              <button
                type="button"
                name="customGame"
                className="border-2 border-black p-2 hover:bg-bones"
                onClick={handleClick}
              >
                JOGAR
              </button>
            </div>
          </div>
          )}
      </div>
    </div>
  );
}

export default ChooseDeckPage;
