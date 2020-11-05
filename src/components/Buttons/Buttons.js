import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

export const Buttons = ({ allGoods, sortedGoods, redGoods }) => (
  <>
    <button
      onClick={allGoods}
      type="button"
    >
      Load All goods
    </button>

    <button
      onClick={sortedGoods}
      type="button"
    >
      Load 5 first goods
    </button>

    <button
      onClick={redGoods}
      type="button"
    >
      Load red goods
    </button>
  </>
);

Buttons.propTypes = {
  allGoods: PropTypes.func.isRequired,
  sortedGoods: PropTypes.func.isRequired,
  redGoods: PropTypes.func.isRequired,
};
