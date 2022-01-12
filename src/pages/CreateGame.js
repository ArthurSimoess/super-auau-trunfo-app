import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Card from '../components/card';
import CreateGameForms from '../components/CreateGameForms';
import CreateGameHeader from '../components/CreateGameHeader';
import CreateCardsList from '../components/CreateCardsList';
import BtnFinishDeck from '../components/BtnFinishDeck';

function CreateGame() {
  const { providerValues: { formsValues } } = useContext(MyContext);
  const {
    name, description, attack, defense, velocity,
    img, rarity, cardTrunfo,
  } = formsValues;

  return (
    <div className="bg-gray-500 h-screen">
      <CreateGameHeader />
      <div className="text-white flex flex-col w-screen pb-10 bg-Card-Dark bg-opacity-70 bg-cover bg-center md:flex-row lg:flex-row">
        <CreateGameForms />
        <div className="w-screen flex items-center justify-center text-white ">
          <Card
            name={name}
            description={description}
            firstAttr={attack}
            secondAttr={defense}
            thirdAttr={velocity}
            img={img}
            rarity={rarity}
            cardTrunfo={cardTrunfo}
          />
        </div>
      </div>
      <CreateCardsList />
      <BtnFinishDeck />
    </div>
  );
}

export default CreateGame;
