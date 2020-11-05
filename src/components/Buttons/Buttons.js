import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

import { getAll, get5First, getRedGoods } from '../../api/goods';

export const Buttons = ({ getGoods }) => (
  <>
    <button
      onClick={() => getGoods(getAll)}
      type="button"
    >
      Load All goods
    </button>

    <button
      onClick={() => getGoods(get5First)}
      type="button"
    >
      Load 5 first goods
    </button>

    <button
      onClick={() => getGoods(getRedGoods)}
      type="button"
    >
      Load red goods
    </button>
  </>
);

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
};
