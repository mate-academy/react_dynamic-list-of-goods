import React from 'react';
import PropTypes from 'prop-types';
import { getAll, getFiveFirst, getRedGoods } from '../api/goods';

export function Buttons({ addGoods }) {
  return (
    <>
      <button
        type="button"
        onClick={() => addGoods(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => addGoods(getFiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => addGoods(getRedGoods)}
      >
        Load red goods
      </button>

    </>
  );
}

Buttons.propTypes = {
  addGoods: PropTypes.func.isRequired,
};
