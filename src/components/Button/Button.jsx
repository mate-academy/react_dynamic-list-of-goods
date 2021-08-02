import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
