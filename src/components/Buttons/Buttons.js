import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ getAll, get5First, getRedGoods, handleGoods }) => (
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
  getAll: PropTypes.arrayOf.isRequired,
  get5First: PropTypes.arrayOf.isRequired,
  getRedGoods: PropTypes.arrayOf.isRequired,
  handleGoods: PropTypes.func.isRequired,
};
