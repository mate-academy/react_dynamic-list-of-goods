import React from 'react';
import PropTypes from 'prop-types';
import { getAll, getFiveFirst, getRedGoods } from '../../api/goods';

export const Buttons = ({ getGoods }) => (
  <div className="app__buttons">
    <button
      type="button"
      onClick={() => getGoods(getAll)}
      className="button is-light"
    >
      All Goods
    </button>

    <button
      type="button"
      onClick={() => getGoods(getFiveFirst)}
      className="button is-success"
    >
      Five First Goods
    </button>

    <button
      type="button"
      onClick={() => getGoods(getRedGoods)}
      className="button is-danger"
    >
      Red Goods
    </button>
  </div>
);

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
};
