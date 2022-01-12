import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function CreateGameInputs({
  type, name, placeholder, label, maxLength, max, min,
}) {
  const { providerValues: { formsValues, handleChangeForms } } = useContext(MyContext);

  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        value={formsValues[name]}
        name={name}
        placeholder={placeholder}
        onChange={handleChangeForms}
        maxLength={maxLength}
        max={max}
        min={min}
        autoComplete="off"
        className="block border rounded w-full py-1 px-2 text-black shadow-sd shadow-white"
      />
    </label>
  );
}

CreateGameInputs.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CreateGameInputs;
