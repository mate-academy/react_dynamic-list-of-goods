import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>

);

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
