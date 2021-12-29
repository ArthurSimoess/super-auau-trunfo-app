import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getDeck, getStorageDeckInfos } from '../services/localStorage';
import pikachico from '../images/pikachico.png'
import customdeck from '../images/customdeck.png'

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

  function backHome() {
    history.push('/')
  }

  return (
      <div className="bg-Game-Time bg-cover bg-center flex flex-col items-center gap-2 pb-32  sm:h-screen">
        <div className=" w-screen p-5 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center border-solid border-8 border-black rounded-lg">
            <img src={pikachico} alt="yorkshire vestido de cachorro" className="w-56 h-72"/>
            <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-300 w-56 h-28">
              <p className="font-bold">Super-Dog-Trunfo</p>
              <p className="font-bold">Criador: Arthur Simões</p>
              <button
              type="button"
              name="dogTrunfo"
              className="px-2 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-purple-400 hover:to-indigo-500 rounded-lg"
              onClick={ handleClick }
              >
              JOGAR
              </button>
            </div>
          </div>
          { deck !== '' &&
          <div className="border-solid border-8 border-black rounded-lg">
            <img src={ customdeck } alt="Cartas" className="w-56 h-72" />
            <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-300 w-56 h-28">
              <p className="font-bold">{deckConfig.deckName}</p>
              <p className="font-bold">{`Criador: ${ deckConfig.creatorName }`}</p>
              <button
                type="button"
                name="customGame"
                className="px-2 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-purple-400 hover:to-indigo-500 rounded-lg"
                onClick={ handleClick }
              >
                JOGAR
              </button>
            </div>
          </div>
            }
        </div>
        <button
          className="p-3 bg-indigo-600 text-black rounded-lg border-2 border-black font-bold hover:opacity-80 hover:p-4"
          onClick={ backHome }
          type="button"
        >
            Voltar
        </button>
      </div>
    )
}

export default ChooseDeckPage;
