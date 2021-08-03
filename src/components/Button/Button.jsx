import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick, method }) => (
  <button
    type="button"
    onClick={() => onClick(method)}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  method: PropTypes.func.isRequired,
};
