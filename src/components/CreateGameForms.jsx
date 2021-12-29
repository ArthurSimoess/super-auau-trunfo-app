import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import CreateGameInputs from "./CreateGameInputs";
import { getStorageCards, getStorageTrunfo, setStorageCards, setStorageTrunfo } from "../services/localStorage";
import tutorial from '../gif/tutorial.gif';

function CreateGameForms() {
  const { providerValues: { formsValues, handleChangeForms, disabled, setFormsValue, setDisabled, setCards, cards } } = useContext(MyContext);
  const [doubt, setDoubt] = useState(false)

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
    attack: '',
    defense: '',
    velocity: '',
    img: '',
    rarity: 'Normal',
    cardTrunfo: false,
    });
    setDisabled(true);
  }

  function doubtClick() {
    if(doubt === false) {
      setDoubt(true);
    } else {
      setDoubt(false);
    }
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
            autoComplete="off"
            className="block border rounded w-full py-1 px-2 text-black resize-none"
          />
        </label>
        <CreateGameInputs
          type="number"
          name="attack"
          label="Ataque"
          max="99"
          min="1"
        />
        <CreateGameInputs
          type="number"
          name="defense"
          label="Defesa"
          max="99"
          min="1"
        />
        <CreateGameInputs
          type="number"
          name="velocity"
          label="Velocidade"
          max="99"
          min="1"
        />
        <div className="flex items-center justify-center gap-3">
          <CreateGameInputs
            type="text"
            name="img"
            label="Imagem"
          />
          <i className="far fa-question-circle text-xl pt-5 cursor-pointer" onClick={ doubtClick }></i>
        </div>
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
          className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-medium w-24 disabled:bg-indigo-300 disabled:cursor-not-allowed">
          Salvar
        </button>
        {
          doubt && 
          <div className="flex flex-col gap-3 items-center p-2 bg-black rounded-lg border-2 border-white text-white absolute mx-auto">
            <p>Cole o link do endereço no campo Imagem</p>
            <img src={ tutorial } alt="Tutorial" className="w-96" />
            <button type="button" className="p-2 bg-black border-2 border-white rounded-xl hover:bg-gray-800" onClick={ doubtClick }>FECHAR</button>
          </div>
        }
      </div>
    </form>
  )
}

export default CreateGameForms;
