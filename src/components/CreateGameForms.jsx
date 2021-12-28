import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import CreateGameInputs from "./CreateGameInputs";
import { getStorageCards, getStorageTrunfo, setStorageCards, setStorageTrunfo } from "../services/localStorage";

function CreateGameForms() {
  const { providerValues: { formsValues, handleChangeForms, disabled, setFormsValue, setDisabled, setCards, cards } } = useContext(MyContext);

  function checkSuperTrunfo() {
    const check = getStorageCards().some((card) => card.cardTrunfo === true);
    setStorageTrunfo(check)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCards([...cards, formsValues]);
    setStorageCards(formsValues);
    checkSuperTrunfo()
    setFormsValue({name: '',
    description: '',
    firstAttr: '',
    secondAttr: '',
    thirdAttr: '',
    img: '',
    rarity: 'Normal',
    cardTrunfo: false,
    });
    setDisabled(true);
  }

  return(
    <form onSubmit={ handleSubmit } className="w-screen p-10">
      <div className="flex flex-col items-center gap-10">
        <CreateGameInputs
          type="text"
          name="name"
          placeHolder="Digite o nome da carta"
          label="Nome"
        />
        <label htmlFor="description">
          Descrição
          <textarea
            type="text"
            placeholder="Digite a descrição"
            name="description"
            value={ formsValues.description }
            onChange={ handleChangeForms }
            maxLength="100"
            autocomplete="off"
            className="block border rounded w-full py-1 px-2 text-black resize-none"
          />
        </label>
        <CreateGameInputs
          type="number"
          name="firstAttr"
          label="Ataque"
          max="99"
          min="1"
        />
        <CreateGameInputs
          type="number"
          name="secondAttr"
          label="Defesa"
          max="99"
          min="1"
        />
        <CreateGameInputs
          type="number"
          name="thirdAttr"
          label="Velocidade"
          max="99"
          min="1"
        />
        <CreateGameInputs
          type="text"
          name="img"
          label="Imagem"
        />
        <select name="rarity" onChange={ handleChangeForms } className="block border rounded w-32 py-1 px-2 text-black">
          <option value="Normal">Normal</option>
          <option value="Raro">Raro</option>
          <option value="Muito Raro">Muito raro</option>
        </select>
      { getStorageTrunfo() === 'true' ? 
        <span>Você já tem um Super Trunfo em seu baralho</span> 
        : (
        <label htmlFor="cardTrunfo">
          Super-Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ formsValues.cardTrunfo }
            onChange={ handleChangeForms }
            className="block border rounded w-full py-1 px-2 text-black shadow-white"
          />
        </label>)
        }
        <button 
          type="submit" 
          disabled={ disabled } 
          className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-medium w-24 disabled:bg-indigo-300">
          Salvar
        </button>
      </div>
    </form>
  )
}

export default CreateGameForms;
