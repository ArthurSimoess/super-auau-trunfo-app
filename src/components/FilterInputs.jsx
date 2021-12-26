import React from 'react'

function FilterInputs({ name, type, onChange, value, checked, disabled }) {
  return (
    <div>
      <input 
        name={ name }
        type={ type }
        onChange={ onChange }
        value={ value }
        checked={ checked }
        disabled={ disabled }
      />
    </div>
    )
}

export default FilterInputs;
