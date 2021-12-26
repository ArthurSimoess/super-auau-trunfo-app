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
    <form onSubmit={ handleSubmit }>
        <div className="form-container">
          <CreateGameInputs
            type="text"
            name="name"
            placeHolder="Digite o nome da carta"
            label="Nome"
          />
          <label htmlFor="description">
            <span>Description</span>
            <textarea
              type="text"
              placeholder="Digite a descrição"
              name="description"
              value={ formsValues.description }
              onChange={ handleChangeForms }
              maxLength="100"
              className="form-control"
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
          <select name="rarity" onChange={ handleChangeForms } >
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito raro</option>
          </select>
        { getStorageTrunfo() === 'true' ? 
          <span>Você já tem um Super Trunfo em seu baralho</span> 
          : (
          <label htmlFor="cardTrunfo">
            <span>Super-Trunfo:</span>
            <input
              type="checkbox"
              name="cardTrunfo"
              checked={ formsValues.cardTrunfo }
              onChange={ handleChangeForms }
            />
          </label>)
          }
          <button 
            type="submit" 
            disabled={ disabled } 
            className="btn btn-primary">
            Salvar
          </button>
        </div>
    </form>
  )
}

export default CreateGameForms;
