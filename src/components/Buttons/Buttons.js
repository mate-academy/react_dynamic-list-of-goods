import React from 'react';
import PropTypes from 'prop-types';

import { getAll, get5First, getRedGoods } from '../../api/goods';

export const Buttons = ({ handleGoods }) => (
  <>
    <button
      type="button"
      className="ui button"
      onClick={() => handleGoods(getAll)}
    >
      get All
    </button>
    <button
      type="button"
      className="ui button"
      name="getAll"
      onClick={() => handleGoods(get5First)}
    >
      get 5 First
    </button>
    <button
      type="button"
      className="ui button"
      onClick={() => handleGoods(getRedGoods)}
    >
      get Red Goods
    </button>
  </>
);

Buttons.propTypes = {
  handleGoods: PropTypes.func.isRequired,
};
