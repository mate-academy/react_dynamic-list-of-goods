import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ getGoods, action, text }) => (
  <>
    <button
      type="button"
      onClick={() => getGoods(action)}
    >
      { text }
    </button>
  </>
);

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
