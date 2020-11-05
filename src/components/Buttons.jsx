import React from 'react';
import PropTypes from 'prop-types';
import { getAll, get5First, getRed } from '../api/goods';

export function Buttons({ addGoods }) {
  return (
    <>
      <button
        className="button"
        type="button"
        onClick={() => addGoods(getAll)}
      >
        Load All goods
      </button>

      <button
        className="button"
        type="button"
        onClick={() => addGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        onClick={() => addGoods(getRed)}
      >
        Load red goods
      </button>

    </>
  );
}

Buttons.propTypes = {
  addAllGoods: PropTypes.func.isRequired,
  addFiveGoods: PropTypes.func.isRequired,
  addRedGoods: PropTypes.func.isRequired,
};
