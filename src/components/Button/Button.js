import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ text, callback }) => (
  <button
    type="button"
    className="btn btn-outline-dark Button"
    onClick={callback}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
