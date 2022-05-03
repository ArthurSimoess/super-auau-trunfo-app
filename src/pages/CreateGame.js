import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Card from '../components/card';
import CreateGameForms from '../components/CreateGameForms';
import CreateGameHeader from '../components/CreateGameHeader';
import CreateCardsList from '../components/CreateCardsList';
import exit from '../images/exit.png';

function CreateGame() {
  const { providerValues: { formsValues } } = useContext(MyContext);
  const {
    name, description, mordida, fome, fofura,
    img, rarity, cardTrunfo,
  } = formsValues;
  const history = useHistory();

  function backHome() {
    history.push('/');
    window.location.reload();
  }

  return (
    <div className="bg-container h-screen overflow-auto">
      <button
        className="text-black rounded-lg font-bold absolute left-3 top-2"
        onClick={backHome}
        type="button"
      >
        <img src={exit} alt="exit" className="w-14" />
      </button>
      <CreateGameHeader />
      <div className="text-white flex flex-col w-screen pb-10 md:flex-row lg:flex-row">
        <CreateGameForms />
        <div className="w-screen flex items-center justify-center text-white ">
          <Card
            name={name}
            description={description}
            firstAttr={mordida}
            secondAttr={fome}
            thirdAttr={fofura}
            img={img}
            rarity={rarity}
            cardTrunfo={cardTrunfo}
          />
        </div>
      </div>
      <CreateCardsList />
    </div>
  );
}

export default CreateGame;
