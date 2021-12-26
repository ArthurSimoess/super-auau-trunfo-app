import React, { useState } from "react";
import MyContext from "./MyContext";

function MyContextProvider({ children }) {

  const [loginName, setName] = useState({
    player1: '',
    player2: '',
  });

  const [formsValues, setFormsValue] = useState({
    name: '',
    description: '',
    firstAttr: '',
    secondAttr: '',
    thirdAttr: '',
    img: '',
    rarity: 'Normal',
    cardTrunfo: false,
  })

  const [disabled, setDisabled] = useState(true)

  const [hasTrunfo, setTrunfo] = useState('')

  const [cards, setCards] = useState([])

  const [game, setGame] = useState(false)

  const [valueAttr, setValueAttr] = useState([])

  const [count, setCount] = useState(0)

  const [playerPoints, setPlayerPoints] = useState({
    jogador1: 0,
    jogador2: 0,
  })

  const [deckConfig, setDeckConfig] = useState({
    deckName: '',
    creatorName: '',
  })

  function checkInputs() {
    const { name, description, firstAttr, secondAttr, thirdAttr, img } = formsValues;
    const array = [ name, description, firstAttr, secondAttr, thirdAttr, img ]
    const arrayCheck = array.every((element) => element.length > 0)
    setDisabled(!arrayCheck)
  }

  function handleChangeForms( { target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormsValue({
      ...formsValues,
      [name]: value,
    })
    checkInputs();
  }

  const providerValues = {
    formsValues,
    handleChangeForms,
    disabled,
    setFormsValue,
    setDisabled,
    setTrunfo,
    hasTrunfo,
    cards,
    setCards,
    game,
    setGame,
    valueAttr,
    setValueAttr,
    count,
    setCount,
    loginName,
    setName,
    playerPoints,
    setPlayerPoints,
    deckConfig,
    setDeckConfig,
  }

  return(
    <MyContext.Provider value={{ providerValues }} >
      { children }
    </MyContext.Provider>
  )
}

export default MyContextProvider;