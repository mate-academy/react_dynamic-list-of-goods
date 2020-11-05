import React from 'react';
import PropTypes from 'prop-types';

export function Button({ name, onClick, action }) {
  return (
    <button
      type="button"
      onClick={() => onClick(action)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  action: PropTypes.shape({}).isRequired,
};
