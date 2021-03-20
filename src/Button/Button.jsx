import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onShow, name }) => (
  <button
    type="button"
    onClick={() => onShow()}
  >
    {name}
  </button>
);

Button.propTypes = {
  onShow: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
