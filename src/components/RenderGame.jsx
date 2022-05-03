/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { getStorageName } from '../services/localStorage';
import DetailsCard from './DetailsCard';
import GameCard from './GameCard';
import PlayerTurnCard from './PlayerTurnCard';
import SelectCard from './SelectCard';

function RenderGame({ deck }) {
  const {
    providerValues: {
      game, setGame, valueAttr, setValueAttr,
      count, setCount, loginName, playerPoints, setPlayerPoints, setName,
    },
  } = useContext(MyContext);
  const [attrName, setAttrName] = useState('');
  const history = useHistory();

  const data = deck;

  useEffect(() => {
    if (loginName.player1 === '' && getStorageName() !== null) {
      setName(getStorageName());
    }
  }, []);

  console.log(data);
  console.log(data.length, data[0]);

  function handleClickAttr({ target: { name } }) {
    window.scrollTo(0, 0);
    setAttrName(name);
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

  function player1() {
    if (count % 2 === 0) {
      return loginName.player1;
    }
    return loginName.player2;
  }

  function player2() {
    const player = player1() === loginName.player1 ? loginName.player2 : loginName.player1;
    return player;
  }

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
            <section className="pt-2">
              {
                  turnWinner()
                }
              <div className="flex flex-col items-center justify-center gap-5 pt-4 md:flex-row pb-5">
                <SelectCard
                  data={data[0]}
                  player={player1()}
                  win={data[0][attrName] > data[1][attrName]}
                  description={data[0].description}
                  valueAttr={data[0][attrName]}
                  attrName={attrName}
                />
                <div>
                  <img src="https://events.robocore.net/images/vs.png" alt="Versus" className="w-32 mb-4" />
                  <button
                    type="button"
                    onClick={handleClickBtn}
                    className="p-2 bg-black text-white border-2 border-white rounded-xl font-bold"
                  >
                    Nova Rodada
                  </button>
                </div>
                <SelectCard
                  data={data[1]}
                  player={player2()}
                  win={data[1][attrName] > data[0][attrName]}
                  description={data[1].description}
                  valueAttr={data[1][attrName]}
                  attrName={attrName}
                />
              </div>
            </section>
          )
            : (
              <div className="flex flex-col items-center justify-center pt-2">
                {
                    count % 2 === 0 ? (
                      <PlayerTurnCard playerName={loginName.player1} />
                    ) : (
                      <PlayerTurnCard playerName={loginName.player2} />)
                  }
                <div className="pt-10">
                  <GameCard
                    name={data[0].name}
                    description={data[0].description}
                    firstAttr={data[0].mordida}
                    secondAttr={data[0].fome}
                    thirdAttr={data[0].fofura}
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
