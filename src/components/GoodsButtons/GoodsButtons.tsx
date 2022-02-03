import React from 'react';
import { getAllGoods, getRedGoods, getFiveFirst } from '../../api/goods';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div>
    <button
      type="button"
      onClick={() => loadGoods(getAllGoods)}
    >
      Get All
    </button>
    <button
      type="button"
      onClick={() => loadGoods(getRedGoods)}
    >
      get red
    </button>
    <button
      type="button"
      onClick={() => loadGoods(getFiveFirst)}
    >
      get five
    </button>
  </div>
);
