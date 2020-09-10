import React from 'react';
import PropTypes from 'prop-types';

import { getAll, get5First, getRedGoods } from '../api/goods';

export const LoadButtons = ({ allGoods, firstFiveGoods, redGoods }) => (
  <>
    <button
      type="button"
      onClick={() => allGoods(getAll)}
    >
      All goods
    </button>

    <button
      type="button"
      onClick={() => firstFiveGoods(get5First)}
    >
      First 5 goods
    </button>

    <button
      type="button"
      onClick={() => redGoods(getRedGoods)}
    >
      just red goods
    </button>
  </>
);

LoadButtons.propTypes = {
  allGoods: PropTypes.func.isRequired,
  firstFiveGoods: PropTypes.func.isRequired,
  redGoods: PropTypes.func.isRequired,
};
