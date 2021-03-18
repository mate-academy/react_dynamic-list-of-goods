import React from 'react';
import PropTypes from 'prop-types';

export function ShowButton({ handler, text }) {
  return (
    <button
      type="button"
      onClick={() => handler()}
    >
      {text}
    </button>
  );
}

ShowButton.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
