import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, addClick }) => (
  <button
    className="ui primary button"
    type="button"
    onClick={addClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  addClick: PropTypes.func.isRequired,
};
