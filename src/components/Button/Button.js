import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, callback }) => (
  <button
    type="button"
    className="app__button"
    onClick={callback}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
