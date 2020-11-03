import React from 'react';
import 'bulma';
import './Buttons.css';
import PropTypes from 'prop-types';
import { getAll, get5First, getRedGoods } from '../../api/goods';

export const Buttons = ({ getGoods }) => {
  const getData = async(getFunction) => {
    const goods = await getFunction();

    getGoods(goods);
  };

  return (
    <div>
      <button
        type="button"
        className="button is-primary"
        onClick={() => getData(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        className="button is-primary"
        onClick={() => getData(get5First)}
      >
        oad 5 first goods
      </button>
      <button
        type="button"
        className="button is-primary"
        onClick={() => getData(getRedGoods)}
      >
        Load red goods
      </button>
    </div>
  );
};

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
};
