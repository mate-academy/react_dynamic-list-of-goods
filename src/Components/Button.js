import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, active }) => (
  <button
    type="button"
    onClick={onClick}
    style={{ display: active && 'none' }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Button;
