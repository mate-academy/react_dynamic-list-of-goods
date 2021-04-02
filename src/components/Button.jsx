import React from 'react';
import PropTypes from 'prop-types';

export function Button({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
