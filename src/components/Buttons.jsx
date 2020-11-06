import React from 'react';
import PropTypes from 'prop-types';
import { getAll, get5First, getRedGoods } from '../api/goods';

export const Buttons = ({ addGoods }) => (
  <div className="load-buttons">
    <button
      type="submit"
      onClick={() => addGoods(getAll)}
    >
      Load All goods
    </button>
    <button
      type="submit"
      onClick={() => addGoods(get5First)}
    >
      Load 5 first goods
    </button>
    <button
      type="submit"
      onClick={() => addGoods(getRedGoods)}
    >
      Load red goods
    </button>
  </div>
);

Buttons.propTypes = {
  addGoods: PropTypes.func.isRequired,
};
