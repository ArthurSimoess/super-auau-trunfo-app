import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext'

function ResultPage() {
  const { providerValues: { playerPoints, loginName } } = useContext(MyContext);
  const history = useHistory();

  function handleClick() {
    history.push('/')
    window.location.reload();
  }
  return (
    <div>
      <p>Jogo finalizado</p>
      <p>Vencedor: { playerPoints.jogador1 > playerPoints.jogador2 ? loginName.player1 : loginName.player2 }</p>
      <button type="button" onClick={ handleClick }>
        Jogar Novamete
      </button>
    </div>
  )
}

export default ResultPage;
