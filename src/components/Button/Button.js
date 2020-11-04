import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, handleClick }) => (
  <button
    className="button is-primary"
    type="button"
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
