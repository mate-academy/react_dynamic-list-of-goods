import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ handleClick, title, color }) => (
  <button
    className={classNames('ui large inverted button', color)}
    type="button"
    onClick={handleClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
