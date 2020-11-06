import React from 'react';
import PropTypes from 'prop-types';
import { getAll, getFiveFirst, getRedGoods } from '../../api/goods';

export const Buttons = ({ getGoods }) => (
  <>
    <button
      onClick={() => getGoods(getAll)}
      type="button"
      className="ui green basic button"
    >
      All Goods
    </button>

    <button
      onClick={() => getGoods(getFiveFirst)}
      type="button"
      className="ui green basic button"
    >
      Get Five First Goods
    </button>

    <button
      onClick={() => getGoods(getRedGoods)}
      type="button"
      className="ui green basic button"
    >
      Red Goods
    </button>
  </>
);

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
};
