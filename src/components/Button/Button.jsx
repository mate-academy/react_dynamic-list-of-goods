import React from 'react';
import PropTypes from 'prop-types';

export function Button({ onClick, text }) {
  return (
    <>
      <button
        className="button"
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
