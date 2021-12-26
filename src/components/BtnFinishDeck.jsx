import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { saveDeck } from "../services/localStorage";

function BtnFinishDeck() {
    const { providerValues: { cards, setCards } } = useContext(MyContext);
    const history = useHistory();

    function handleClick() {
        localStorage.removeItem('saveDeck')
        saveDeck(cards)
        localStorage.removeItem('cards')
        localStorage.removeItem('trunfo')
        setCards([])
        global.alert('Baralho criado com sucesso. Preencha o nome dos jogadores na tela inicial e clique em jogar')
        history.push('/')
    }

    function renderFinishBtn() {
      if (cards && cards.length > 1 && cards.length % 2 === 0) {
        return (
          <button
            type="button"
            onClick={ handleClick }
          >
            Finalizar Baralho
          </button>)
      }
    }
 
  return (
    <div>
      {
        renderFinishBtn()
      }
    </div>
  )
}

export default BtnFinishDeck