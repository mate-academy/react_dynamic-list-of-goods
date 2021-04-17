import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ name, handleClick }) => (
  <button
    type="button"
    className="button"
    onClick={handleClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};
