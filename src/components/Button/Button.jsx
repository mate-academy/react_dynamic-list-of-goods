import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  className,
  handleClick,
  text,
}) => (
  <button
    type="button"
    className={`button mx-4 ${className}`}
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
