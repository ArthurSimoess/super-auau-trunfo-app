/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getStorageName } from '../services/localStorage';
import DetailsCard from './DetailsCard';
import GameCard from './GameCard';
import PlayerTurnCard from './PlayerTurnCard';

function RenderGame({ deck }) {
  const {
    providerValues: {
      game, setGame, valueAttr, setValueAttr,
      count, setCount, loginName, playerPoints, setPlayerPoints, setName,
    },
  } = useContext(MyContext);
  const history = useHistory();

  const data = deck;

  useEffect(() => {
    if (loginName.player1 === '' && getStorageName() !== null) {
      setName(getStorageName());
    }
  }, []);

  function handleClickAttr({ target: { name } }) {
    window.scrollTo(0, 0);
    setValueAttr([{ value1: data[0][name], name1: name }, { value2: data[1][name], name2: name }]);
    setGame(true);
  }

  function increasePoints() {
    if (Number(valueAttr[0].value1) === Number(valueAttr[1].value2)) {
      setPlayerPoints({
        ...playerPoints,
      });
    } else if (Number(valueAttr[0].value1) > Number(valueAttr[1].value2)
    && Number(count) % 2 === 0) {
      setPlayerPoints({
        ...playerPoints,
        jogador1: playerPoints.jogador1 + 1,
      });
    } else if (Number(valueAttr[0].value1) < Number(valueAttr[1].value2)
    && Number(count) % 2 !== 0) {
      setPlayerPoints({
        ...playerPoints,
        jogador1: playerPoints.jogador1 + 1,
      });
    } else {
      setPlayerPoints({
        ...playerPoints,
        jogador2: playerPoints.jogador2 + 1,
      });
    }
  }

  // function playerTurn() {
  //   if (count % 2 === 0) {
  //     return loginName.player1;
  //   }
  //   return loginName.player2;
  // }

  function turnWinner() {
    if (Number(valueAttr[0].value1) === Number(valueAttr[1].value2)) {
      return (
        <DetailsCard
          name="EMPATE"
        />
      );
    } if (Number(valueAttr[0].value1) > Number(valueAttr[1].value2) && count % 2 === 0) {
      return (
        <DetailsCard
          name={loginName.player1}
        />
      );
    } if (Number(valueAttr[0].value1) < Number(valueAttr[1].value2) && count % 2 !== 0) {
      return (
        <DetailsCard
          name={loginName.player1}
        />
      );
    }
    return (
      <DetailsCard
        name={loginName.player2}
      />
    );
  }

  function handleClickBtn() {
    window.scrollTo(0, 0);
    increasePoints();
    data.splice(0, 2);
    setCount(count + 1);
    if (data.length === 0) {
      history.push('/results');
    }
    setGame(false);
  }

  return (
    <div>
      {
          game ? (
            <section className="pt-10">
              {
                  turnWinner()
                }
              <div className="flex flex-col items-center justify-center gap-5 pt-10 md:flex-row pb-5">
                <GameCard
                  name={data[0].name}
                  description={data[0].description}
                  firstAttr={data[0].attack}
                  secondAttr={data[0].defense}
                  thirdAttr={data[0].velocity}
                  img={data[0].img}
                  disabled
                  rarity={data[0].rarity}
                  cardTrunfo={data[0].cardTrunfo}
                  handleClick={handleClickAttr}
                />
                <div>
                  <img src="https://events.robocore.net/images/vs.png" alt="Versus" className="w-32 mb-4" />
                  <button
                    type="button"
                    onClick={handleClickBtn}
                    className="p-2 bg-gray-500 text-white to-gray-900 hover:p-3 hover:text-black border-2 border-white  rounded-xl font-bold"
                  >
                    Nova Rodada
                  </button>
                </div>
                <GameCard
                  name={data[1].name}
                  description={data[1].description}
                  firstAttr={data[1].attack}
                  secondAttr={data[1].defense}
                  thirdAttr={data[1].velocity}
                  img={data[1].img}
                  disabled
                  rarity={data[1].rarity}
                  cardTrunfo={data[1].cardTrunfo}
                  handleClick={handleClickAttr}
                />
              </div>
            </section>
          )
            : (
              <div className="flex flex-col items-center justify-center pt-20">
                {
                    count % 2 === 0 ? (
                      <PlayerTurnCard playerName={loginName.player1} />
                    ) : (
                      <PlayerTurnCard playerName={loginName.player2} />)
                  }
                <div className="pt-10 pb-10">
                  <GameCard
                    name={data[0].name}
                    description={data[0].description}
                    firstAttr={data[0].attack}
                    secondAttr={data[0].defense}
                    thirdAttr={data[0].velocity}
                    img={data[0].img}
                    rarity={data[0].rarity}
                    cardTrunfo={data[0].cardTrunfo}
                    handleClick={handleClickAttr}
                  />
                </div>
              </div>
            )
            }
    </div>
  );
}

RenderGame.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderGame;
