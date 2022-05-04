import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import trophy from '../images/trophy.png';
import TieResult from '../components/TieResult';
import gold from '../images/gold.png';
import silver from '../images/silver.png';
import again from '../images/playagain.png';

function ResultPage() {
  const { providerValues: { playerPoints, loginName } } = useContext(MyContext);
  const [place, setPlace] = useState({
    firstPlace: '',
    secondPlace: '',
    firstPoints: 0,
    secondPoints: 0,
    tie: false,
  });
  const history = useHistory();

  useEffect(() => {
    if (playerPoints.jogador1 > playerPoints.jogador2) {
      setPlace({
        firstPlace: loginName.player1,
        secondPlace: loginName.player2,
        firstPoints: playerPoints.jogador1,
        secondPoints: playerPoints.jogador2,
      });
    } else if (playerPoints.jogador1 === playerPoints.jogador2) {
      setPlace({
        tie: true,
      });
    } else {
      setPlace({
        firstPlace: loginName.player2,
        secondPlace: loginName.player1,
        firstPoints: playerPoints.jogador2,
        secondPoints: playerPoints.jogador1,
      });
    }
  }, []);

  function handleClick() {
    history.push('/');
    window.location.reload();
  }

  return (
    <div className="bg-container h-screen overflow-auto">
      { place.tie ? <TieResult /> : (
        <div className="flex justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center pt-10 gap-5 font-bol">
            <div className="flex gap-1 md:gap-5 items-center">
              <img src={trophy} alt="Trófeu dourado" />
              <p className="text-xl md:text-6xl text-white font-bold shadow-text">CLASSIFICAÇÃO</p>
              <img src={trophy} alt="Trófeu dourado" />
            </div>
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-600 p-2 rounded-md font-bold md:p-3 flex w-96">
              <img src={gold} alt="gold medal" />
              <div>
                <p className="md:text-2xl text-center shadow-logo">
                  {`Primeiro lugar: ${place.firstPlace}`}
                </p>
                <hr className="border-black border-1 mt-1 mb-1" />
                <p className="md:text-1xl text-center shadow-logo">
                  {`Total de rodadas ganhas: ${place.firstPoints}`}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-600 p-2 rounded-md font-bold  md:p-3 flex  w-96">
              <img src={silver} alt="silver medal" />
              <div>
                <p className="md:text-2xl text-center shadow-logo">
                  {`Segundo lugar: ${place.secondPlace}`}
                </p>
                <hr className="border-black border-1 mt-1 mb-1" />
                <p className="md:text-1xl text-center shadow-logo">
                  {`Total de rodadas ganhas: ${place.secondPoints}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full justify-center pt-10">
        <button
          type="button"
          onClick={handleClick}
          className="p-2 bg-black rounded-lg border-1 border-black hover:border-white hover:p-3"
        >
          <div className="flex items-center gap-1 justify-center">
            <img src={again} alt="cards" width="50px" />
            <p className="m-0 font-bold text-white">Jogar Novamente</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
