import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  className,
  onClick,
  text,
}) => (
  <button
    type="button"
    className={`button mx-4 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
