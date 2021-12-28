import React from 'react'

function FilterInputs({ name, type, onChange, value, checked, disabled, className, placeholder, label }) {
  return (
    <div>
      <label htmlFor={ name }>
        { <span className="font-bold text-lg">{ label }</span> }
        <input
          name={ name }
          type={ type }
          onChange={ onChange }
          className={ className }
          placeholder={ placeholder }
          value={ value }
          checked={ checked }
          disabled={ disabled }
          autocomplete="off"
        />
      </label>
    </div>
    )
}

export default FilterInputs;
