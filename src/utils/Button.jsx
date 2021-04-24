import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, action, callback }) => (
  <button
    type="button"
    className="btn"
    onClick={() => action(callback)}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
