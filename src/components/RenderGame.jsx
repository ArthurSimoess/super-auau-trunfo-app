import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import GameCard from './GameCard';

function RenderGame({ deck }) {
  const { providerValues: { game, setGame, valueAttr, setValueAttr, 
    count, setCount, loginName, playerPoints, setPlayerPoints } } = useContext(MyContext);
  const history = useHistory();
  
  const data = deck;
  console.log(data)

  function handleClickAttr({ target: { name } }) {
    setValueAttr([data[0][name], data[1][name]])
    setGame(true)
  }

  function increasePoints() {
    if (valueAttr[0] > valueAttr[1] && Number(count) % 2 === 0) {
      setPlayerPoints({
        ...playerPoints,
        jogador1: playerPoints.jogador1 + 1
      })
    } else {
      setPlayerPoints({
        ...playerPoints, 
        jogador2: playerPoints.jogador2 + 1 
      })
    }
  }

  function turnWinner() {
    if (valueAttr[0] > valueAttr[1] && count % 2 === 0) {
      return <p className="text-xl">Vencedor da rodada: { loginName.player1 }</p>
    } else {
      return <p className="text-xl">Vencedor da rodada: { loginName.player2 }</p>
    }
  }

  function handleClickBtn() {
    increasePoints()
    data.splice(0, 2)
    setCount(count + 1)
    if (data.length === 0) {
      history.push('/results')
    }
    setGame(false)
  }

  return (
      <div className="bg-Dice bg-cover bg-center sm:h-screen">
        {
          game ? (
            <section className="pt-10">
              <div className="flex justify-center mx-auto bg-gradient-to-r from-gray-50 to-gray-500 p-4 w-40 rounded-xl font-bold">
                { 
                  turnWinner()
                }
              </div>
              <div className="flex flex-col items-center justify-center gap-5 pt-10 md:flex-row">
                <GameCard
                  name={ data[0].name }
                  description={ data[0].description }
                  firstAttr={ data[0].firstAttr }
                  secondAttr={ data[0].secondAttr }
                  thirdAttr={ data[0].thirdAttr }
                  img={ data[0].img }
                  rarity={ data[0].rarity }
                  cardTrunfo={ data[0].cardTrunfo }
                  handleClick={ handleClickAttr }
                />
                <img src="https://events.robocore.net/images/vs.png" alt="Versus" className="w-32"/>
                <GameCard
                  name={ data[1].name }
                  description={ data[1].description }
                  firstAttr={ data[1].firstAttr }
                  secondAttr={ data[1].secondAttr }
                  thirdAttr={ data[1].thirdAttr }
                  img={ data[1].img }
                  rarity={ data[1].rarity }
                  cardTrunfo={ data[1].cardTrunfo }
                  handleClick={ handleClickAttr }
                />
              </div>
              <div className="flex items-center justify-center pt-10">
                <button
                  type="button"
                  onClick={ handleClickBtn }
                  className="p-3 bg-gradient-to-r from-gray-50 to-gray-500 hover:p-4 border-4 border-black rounded-xl font-bold"
                >
                  Nova Rodada
                </button>
              </div>
            </section>)
            : (
              <div className="flex flex-col items-center justify-center pt-20">
                <div className="flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-gray-50 to-gray-500 p-5 w-64 rounded-xl font-bold">
                  {
                    count % 2 === 0 ? (
                    <p>Jogador da rodada:  { loginName.player1 }</p>
                    ) : (
                    <p>Jogador da rodada:  { loginName.player2 }</p>)
                  }
                  <p>Escolha um atributo e clique nele</p>
                </div>
                <div className="pt-10 pb-56">
                    <GameCard
                      name={ data[0].name }
                      description={ data[0].description }
                      firstAttr={ data[0].firstAttr }
                      secondAttr={ data[0].secondAttr }
                      thirdAttr={ data[0].thirdAttr }
                      img={ data[0].img }
                      rarity={ data[0].rarity }
                      cardTrunfo={ data[0].cardTrunfo }
                      handleClick={ handleClickAttr }
                    />
                </div>
              </div>
            )     
            }
       </div>)
}

export default RenderGame;