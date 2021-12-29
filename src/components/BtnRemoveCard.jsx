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
     className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-2 rounded-lg mt-3"
     onClick={ handleClick }
    >
     Remover Carta
   </button>
  )
}

export default BtnRemoveCard