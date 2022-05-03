import PropTypes from 'prop-types';
import React from 'react';

function DetailsCard({
  name,
}) {
  return (
    <div className={`flex justify-center items-center bg-gray-500 border-2 rounded-lg border-white border-t-transparent px-2 w-80 mx-auto ${name === 'EMPATE' ? '' : 'hidden'}`}>
      <p className="text-white font-bold text-xl md:text-4xl uppercase m-0">
        {name === 'EMPATE' ? 'EMPATE' : ''}
      </p>
    </div>
  );
}

DetailsCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DetailsCard;
