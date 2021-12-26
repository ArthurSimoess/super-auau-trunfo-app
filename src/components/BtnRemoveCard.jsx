import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { removeStorageCard, setStorageTrunfo } from '../services/localStorage';

function BtnRemoveCard({ name }) {
  const { providerValues: { cards, setCards } } = useContext(MyContext)

  function handleClick({ target: { name } }) {
    const filterCards = cards.filter((card) => card.name !== name)
    setCards(filterCards)
    removeStorageCard(filterCards)
    const checkTrunfo = cards.some((card) => card.cardTrunfo === true)
    if (checkTrunfo) setStorageTrunfo('false')
  }

  return (
   <button 
     type="button"
     name={ name }
     onClick={ handleClick }
    >
     Excluir
   </button>
  )
}

export default BtnRemoveCard