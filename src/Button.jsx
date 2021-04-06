import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onclick, text }) => (
  <button
    type="button"
    onClick={onclick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
