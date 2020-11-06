import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ onClick, name }) => (
  <>
    <button
      type="button"
      className="button is-primary is-large"
      onClick={onClick}
    >
      {name.toUpperCase()}
    </button>
  </>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
