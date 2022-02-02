import React from 'react';
import { get5First, getAllGoods, getRedGoods } from '../../api/goods';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>,
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div>
    <button
      type="button"
      onClick={() => loadGoods(getAllGoods)}
    >
      Load All goods
    </button>
    <button
      type="button"
      onClick={() => loadGoods(get5First)}
    >
      Load 5 first goods
    </button>
    <button
      type="button"
      onClick={() => loadGoods(getRedGoods)}
    >
      Load red goods
    </button>
  </div>
);
