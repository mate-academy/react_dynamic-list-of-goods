import React from 'react';
import PropTypes from 'prop-types';
import 'bulma';

export const Button = ({ title, setGoods, handler }) => (
  <button
    type="button"
    className="button is-link"
    onClick={() => setGoods(handler)}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  setGoods: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
};
