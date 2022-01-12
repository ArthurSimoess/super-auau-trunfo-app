import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import trophy from '../images/trophy.svg';
import finish from '../images/finish.svg';
import TieResult from '../components/TieResult';

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
    <div className="bg-gray-200 h-screen">
      { place.tie ? <TieResult /> : (
        <div className="flex justify-center gap-8 md:gap-16">
          <img src={trophy} alt="Troféu" className="w-10 md:w-40" />
          <div className="flex flex-col items-center pt-10 gap-5 font-bol">
            <p className="md:text-5xl">CLASSIFICAÇÃO</p>
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-600 p-2 rounded-md font-bold md:p-3">
              <p className="md:text-2xl text-center">
                Primeiro Lugar:
                { place.firstPlace }
              </p>
              <hr className="border-black border-1 mt-1 mb-1" />
              <p className="md:text-1xl text-center">
                Total de rodadas ganhas:
                { place.firstPoints}
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-600 p-2 rounded-md font-bold  md:p-3">
              <p className="md:text-2xl text-center">
                Segundo Lugar:
                { place.secondPlace }
              </p>
              <hr className="border-black border-1 mt-1 mb-1" />
              <p className="md:text-1xl text-center">
                Total de rodadas ganhas:
                { place.secondPoints}
              </p>
            </div>
          </div>
          <img src={trophy} alt="Troféu" className="w-10 md:w-40" />
        </div>
      )}
      <div className="flex flex-col items-center gap-10 pt-20 bg-gray-200">
        <img src={finish} alt="Finish" className="w-96 md:w-2/6" />
        <button
          type="button"
          onClick={handleClick}
          className="p-2 bg-gradient-to-r from-indigo-200 to-indigo-400 rounded-lg border-4 border-black hover:border-white hover:p-3"
        >
          Jogar Novamente
        </button>
      </div>
      <div className="p-5 bg-gray-200" />
    </div>
  );
}

export default ResultPage;
