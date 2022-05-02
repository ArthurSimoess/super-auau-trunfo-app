import PropTypes from 'prop-types';
import React from 'react';
import win from '../images/matchWin.png';

function DetailsCard({
  name,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center">
        <img src={win} alt="winner" />
        <p className="text-black font-bold text-xl md:text-4xl uppercase shadow-logo">
          {`${name} venceu a rodada`}
        </p>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DetailsCard;
