import React from 'react';
import { getAll, getFiveFirst, getRedGoods } from '../../api/goods';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div>
    <button
      type="button"
      onClick={() => loadGoods(getAll)}
    >
      Get All
    </button>

    <button
      type="button"
      onClick={() => loadGoods(getRedGoods)}
    >
      Get red Goods
    </button>

    <button
      type="button"
      onClick={() => loadGoods(getFiveFirst)}
    >
      Get first 5
    </button>
  </div>
);
