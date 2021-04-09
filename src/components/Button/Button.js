import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  text,
  handleClick,
  loadBy,
}) => (
  <button
    type="button"
    onClick={() => handleClick(loadBy)}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  loadBy: PropTypes.func.isRequired,
};
