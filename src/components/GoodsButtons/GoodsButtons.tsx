import React from 'react';
import './GoodsButtons.scss';
import { getAll, getFiveFirst, getRedGoods } from '../../api/goods';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div className="button-block">
    <button
      type="button"
      className="button is-success is-medium is-rounded is-link"
      onClick={() => loadGoods(getAll)}
    >
      Get All
    </button>

    <button
      type="button"
      className="button is-warning is-medium is-rounded is-link"
      onClick={() => loadGoods(getFiveFirst)}
    >
      Get 5
    </button>

    <button
      type="button"
      className="button is-danger is-medium is-rounded is-link"
      onClick={() => loadGoods(getRedGoods)}
    >
      Get red
    </button>
  </div>
);
