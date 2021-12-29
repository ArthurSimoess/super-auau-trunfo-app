import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import MyContext from "../context/MyContext";
import { setStorageName } from "../services/localStorage";
import cardImg  from "../images/cardsimg.svg"

function HomePage () {
  const { providerValues: { loginName, setName } } = useContext(MyContext);
  const [disabledBtn, setDisableBtn] = useState(true)
  const history = useHistory();

  function CheckNames() {
    const { player1, player2 } = loginName;
    if (player1.length > 1 && player2.length > 1) {
      setDisableBtn(false)
    } else {
      setDisableBtn(true)
    }
  }

  function handleChange({ target: { name, value }}) {
    CheckNames()
    setName({
      ...loginName,
      [name]: value,
    });
    setStorageName({ ...loginName, [name]: value, });
  }

  function handleClick({ target: { name }}) {
   if (name === 'instructions') {
     history.push('/instructions')
   } else {
     history.push('/deck')
   }
  }

  return(
      <div className="bg-gradient-to-r from-gray-500 to-indigo-200 sm:h-screen pb-48">
        <div>
          <img src={ cardImg } alt="cards" className="w-52 mx-auto pt-10 mb-5"/>
          <h1 className="text-center text-2xl font-bold mb-5">Super-Tryunfo</h1>
          <div className="bg-white w-80 h-96 rounded-lg mx-auto p-8 shadow-xl">
              <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="text-base text-gray-800">
                    <i class="fas fa-user"></i> Primeiro jogador:
                      <input
                        name="player1"
                        id="name1"
                        value={ loginName.player1 }
                        onChange={ handleChange }
                        className="block border rounded w-full py-1 px-2"
                        type="text"
                        placeholder="Nome do primeiro jogador"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                  <div className="mb-6">
                  <label htmlFor="name" className="text-base text-gray-800">
                  <i class="fas fa-user"></i> Segundo jogador:
                    <input
                      name="player2"
                      id="name"
                      value={ loginName.player2 }
                      onChange={ handleChange }
                      className="block border rounded w-full py-1 px-2"
                      type="text"
                      placeholder="Nome do segundo jogador"
                      autoComplete="off"
                    />
                  </label>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-medium w-full disabled:bg-indigo-300 disabled:cursor-not-allowed"
                    name="game"
                    onClick={ handleClick }
                    disabled={ disabledBtn }
                  >
                   Jogar
                  </button>
              </form>
              <hr className="text-black mt-10"/>
              <div className="mt-5 flex flex-col items-center gap-5">
                <p>
                  Ou crie o seu próprio baralho
                </p>
                <button
                  type="button"
                  className="bg-indigo-600  px-4 py-2 rounded-lg text-white"
                  name="instructions"
                  onClick={ handleClick }
                >
                  Criar
                </button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage;