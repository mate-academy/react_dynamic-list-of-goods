import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, title }) => (
  <button
    className="btn btn-primary m-2"
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
