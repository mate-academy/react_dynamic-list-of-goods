import React from 'react';
import PropTypes from 'prop-types';
import 'bulma';

export function Button({ text, onClick, onGet }) {
  return (
    <button
      className="button is-primary is-rounded"
      type="button"
      onClick={() => onClick().then(onGet)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onGet: PropTypes.func.isRequired,
};
