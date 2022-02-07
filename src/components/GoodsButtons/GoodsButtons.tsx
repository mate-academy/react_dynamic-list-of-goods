import React from 'react';
import './GoodsButtons.scss';
import { getAllGoods, getFiveFirst, getRedGoods } from '../../api/goods';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div>
    <button
      className="button is-info is-outlined"
      type="button"
      onClick={() => loadGoods(getAllGoods)}
    >
      Get All
    </button>

    <button
      className="button is-dark is-outlined"
      type="button"
      onClick={() => loadGoods(getFiveFirst)}
    >
      First five
    </button>

    <button
      className="button is-danger is-outlined"
      type="button"
      onClick={() => loadGoods(getRedGoods)}
    >
      Get red
    </button>
  </div>
);
