import React from 'react';
import PropTypes from 'prop-types';

export const FormButton = ({
  text,
  action,
  classesWhenLoaded,
  classesWhenLoading,
}) => (
  <button
    type="button"
    onClick={({ target }) => {
      // eslint-disable-next-line
      target.className = classesWhenLoading;

      action(target);
    }}
    className={classesWhenLoaded}
  >
    {text}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  classesWhenLoading: PropTypes.string.isRequired,
  classesWhenLoaded: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
