import PropTypes from 'prop-types';
import React from 'react';

function FilterInputs({
  name, type, onChange, value, checked, disabled, className, placeholder, label,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <span className="font-bold text-lg">{ label }</span>
        <input
          name={name}
          type={type}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          value={value}
          checked={checked}
          disabled={disabled}
          autoComplete="off"
        />
      </label>
    </div>
  );
}

FilterInputs.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterInputs;
