import React from 'react';
import PropTypes from 'prop-types';

export const FormButton = ({ text, action }) => (
  <button
    type="button"
    onClick={action}
    className="control button is-primary"
  >
    {text}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
