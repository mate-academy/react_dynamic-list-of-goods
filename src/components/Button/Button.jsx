import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, buttonText }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {buttonText}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
