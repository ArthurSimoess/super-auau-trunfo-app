import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { saveStorageDeckInfos } from '../services/localStorage';

function InstructionsPage() {
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  function checkDeck() {
    const { deckName, creatorName } = deckConfig;
    if (deckName.length > 1 && creatorName.length > 1) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  function handleChange({ target: { name, value }}) {
    setDeckConfig({
      ...deckConfig,
      [name]: value,
    })
    checkDeck()
  }

  function handleClick() {
    saveStorageDeckInfos(deckConfig)
     history.push('/createGame')
  }

  function backHomePage() {
    history.push('/')
  }


  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-300 h-screen pt-5 pb-24">
      <div className="bg-white shadow-2xl max-w-md m-auto flex flex-col items-center rounded-xl p-10 gap-6 pb-2">
        <h1 className="text-indigo-500 font-bold">Instruções para montagem do baralho</h1>
        <ul className="list-disc">
          <li className="mb-3 text-justify">
            O numero de cartas do baralho precisa ser necessariamente um número par, caso contrário o botão para salvar o baralho não aparecerá na tela.
          </li>
          <li className="mb-3 text-justify">
            A imagem da carta deverá ser necessariamente o link url de alguma imagem que esteja disponível na internet.
          </li>
          <li className="mb-3 text-justify">
            Use sua criatividade para criar um baralho único e divertido.
          </li>
        </ul>
        <div>
        <label htmlFor="deckName" className="text-indigo-500 font-bold">
          Digite o nome do seu baralho:
            <input
              type="text"
              name="deckName"
              className="block border rounded w-full py-1 px-2 text-neutral-900"
              value={ deckConfig.deckName }
              onChange={ handleChange }
              autocomplete="off"
            />
        </label>
            </div>
            <div>
        <label htmlFor="creatorName" className="text-indigo-500 font-bold">
          Digite o seu nome:
            <input
              type="text"
              name="creatorName"
              className="block border rounded w-full py-1 px-2 text-neutral-900"
              value={ deckConfig.creatorName }
              onChange={ handleChange }
              autocomplete="off"
            />
        </label>
            </div>
            <button
              type="button"
              className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-medium w-full disabled:bg-indigo-300"
              disabled={ disabled }
              onClick={ handleClick }
            >
               Criar baralho
            </button>
            <button
              type="button"
              className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-medium w-28 disabled:bg-indigo-300"
              onClick={ backHomePage }
            >
               Voltar
            </button>
      </div>

    </div>
  )
}

export default InstructionsPage;
