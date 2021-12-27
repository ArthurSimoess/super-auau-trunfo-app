import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getDeck, getStorageDeckInfos } from '../services/localStorage';

function ChooseDeckPage() {
  const history = useHistory();
  const [deck, setDeck] = useState('')
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);

  useEffect(() => {
    if (getDeck() !== null && getDeck().length > 1) {
      setDeck(getDeck())
    }
  }, [])

  useEffect(() => {
    if (getStorageDeckInfos !== null && deckConfig.deckName === '') {
      setDeckConfig(getStorageDeckInfos())
    }
  }, [])

  function handleClick({ target: { name } }) {
    console.log(name)
    switch(name) {
      case 'dogTrunfo':
        history.push('/gameDogTrunfo')
        break;
      case 'customGame':
        history.push('/gameCustomDeck')
        break;
      default:
        history.push('/')
    }
  }

  return (
    <div className=" w-screen h-screen bg-Game-Time bg-cover bg-center flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <p>Super-Dog-Trunfo</p>
        <p>Criador: Arthur Simões</p>
        <button
        type="button"
        name="dogTrunfo"
        className="px-2 py-2 bg-indigo-600"
        onClick={ handleClick }
        >
        JOGAR
        </button>
      </div>
      { deck !== '' &&
      <div>
        <p>{deckConfig.deckName}</p>
        <p>{`Criador: ${ deckConfig.creatorName }`}</p>
        <button
          type="button"
          name="customGame"
          className="px-2 py-2 bg-indigo-600"
          onClick={ handleClick }
        >
          JOGAR
        </button>
      </div>
        } 
    </div>
    )
}

export default ChooseDeckPage;
