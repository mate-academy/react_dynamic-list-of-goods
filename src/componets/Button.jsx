import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, loadedProducts }) => {
  return (
    <button
      type="button"
      onClick={loadedProducts}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  loadedProducts: PropTypes.func.isRequired,
};
