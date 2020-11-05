import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, onClick, callback }) => (
  <button
    type="button"
    onClick={() => {
      onClick(callback);
    }}
    className="btn btn-dark"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
};
