import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SaveIcon } from '@heroicons/react/solid';
import MyContext from '../context/MyContext';
import { saveDeck } from '../services/localStorage';

function BtnFinishDeck() {
  const { providerValues: { cards, setCards } } = useContext(MyContext);
  const history = useHistory();

  function handleClick() {
    localStorage.removeItem('saveDeck');
    saveDeck(cards);
    localStorage.removeItem('cards');
    localStorage.removeItem('trunfo');
    setCards([]);
    global.alert('Baralho criado com sucesso. Preencha o nome dos jogadores na tela inicial e clique em jogar');
    history.push('/');
  }

  function renderFinishBtn() {
    if (cards && cards.length > 1 && cards.length % 2 === 0) {
      return (
        <button
          type="button"
          onClick={handleClick}
          className="p-3 mx-auto bg-indigo-600 rounded-lg flex flex-col items-center"
        >
          <p className="font-bold">Salvar Baralho</p>
          <p>
            <SaveIcon className="w-10" />
          </p>
        </button>
      );
    }
    return '';
  }

  return (
    <div className="w-screen bg-gradient-to-r from-stone-600 to-stone-900 pb-10">
      {
        renderFinishBtn()
      }
    </div>
  );
}

export default BtnFinishDeck;
