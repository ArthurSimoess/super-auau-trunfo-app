import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function CreateGameInputs({ type, name, placeholder, label, maxLength, max, min }) {
  const { providerValues: { formsValues, handleChangeForms } } = useContext(MyContext);

  return(
    <>
        <label htmlFor={name}>
          <span>{label}</span>
          <input
          type={type}
          value={ formsValues[name] }
          name={name}
          placeholder={placeholder}
          onChange={ handleChangeForms }
          maxLength={ maxLength }
          max={ max }
          min= { min }
          className="form-control"
          />
        </label>
    </>
  )
}

export default CreateGameInputs;