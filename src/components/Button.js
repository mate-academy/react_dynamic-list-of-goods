import React from 'react';
import PropTypes from 'prop-types';

export const Button = (
  { title, callback },
) => (
  <button
    type="button"
    onClick={callback}
  >
    {title}
  </button>
);

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
