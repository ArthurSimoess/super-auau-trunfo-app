import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { setStorageName } from '../services/localStorage';
import homelogo from '../images/homelogo.svg';
import Footer from '../components/Footer';
import Instructions from '../components/InstructionsModal';

function HomePage() {
  const { providerValues: { loginName, setName } } = useContext(MyContext);
  const [disabledBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  function CheckNames() {
    const { player1, player2 } = loginName;
    if (player1.length > 1 && player2.length > 1) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }

  function handleChange({ target: { name, value } }) {
    CheckNames();
    setName({
      ...loginName,
      [name]: value,
    });
    setStorageName({ ...loginName, [name]: value });
  }

  function handleClick({ target: { name } }) {
    if (name === 'instructions') {
      history.push('/instructions');
    } else {
      history.push('/deck');
    }
  }

  return (
    <div className="h-screen overflow-auto flex">
      <div className="bg-dog-play w-full bg-center bg-cover hidden md:block" />
      <div className="bg-yellow-200 rounded-lg flex items-center justify-center p-4 shadow-xl w-full md:w-10/12">
        <form className="flex flex-col items-center gap-2">
          <div className="flex flex-col">
            <img src={homelogo} alt="card-logo" className="w-44" />
            <h1 className="text-center text-4xl font-bold text-vlack">Dog-Trunfo</h1>
          </div>
          <div>
            <label htmlFor="name" className="text-base text-black font-bold">
              <i className="fas fa-user" />
              {' '}
              Primeiro jogador:
              <input
                name="player1"
                id="name1"
                value={loginName.player1}
                onChange={handleChange}
                className="block border rounded w-full py-1 px-2"
                type="text"
                maxLength="11"
                placeholder="Nome do primeiro jogador"
                autoComplete="off"
                data-testid="firstInput"
              />
            </label>
          </div>
          <div>
            <label htmlFor="name" className="text-base text-gray-800 font-bold">
              <i className="fas fa-user" />
              {' '}
              Segundo jogador:
              <input
                name="player2"
                id="name"
                value={loginName.player2}
                onChange={handleChange}
                className="block border rounded w-full py-1 px-2"
                type="text"
                maxLength="11"
                placeholder="Nome do segundo jogador"
                autoComplete="off"
                data-testid="secondInput"
              />
            </label>
          </div>
          <button
            type="button"
            className="bg-black px-4 py-2 rounded-lg text-white text-center font-medium disabled:cursor-not-allowed border-2 border-headline"
            name="game"
            onClick={handleClick}
            disabled={disabledBtn}
            data-testid="gameBtn"
          >
            Jogar
          </button>
          <hr className="text-black w-full" />
          <div className="flex flex-col items-center">
            <p>
              Ou crie o seu próprio baralho
            </p>
            <Instructions />
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
