import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ handleClick, name, isLoading }) => (
  <button
    type="button"
    onClick={handleClick}
    className={classNames('ui button purple', {
      'ui loading': isLoading,
    })}
  >
    {name}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
