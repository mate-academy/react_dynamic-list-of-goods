import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ name, handleClick }) => (
  <button
    type="button"
    className="button"
    onClick={handleClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
