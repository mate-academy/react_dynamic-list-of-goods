import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick, active }) => (
  <button
    className="goods__button"
    type="button"
    onClick={handleClick}
    style={{ display: active && 'none' }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Button;
