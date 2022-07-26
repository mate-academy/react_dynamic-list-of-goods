import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleGoodLoading = async (
    loadGoodsCallback: () => Promise<Good[]>,
  ) => {
    const goods = await loadGoodsCallback();

    setVisibleGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodLoading(getAll)}
      >
        All goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodLoading(get5First)}
      >
        Top 5 goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodLoading(getRedGoods)}
      >
        Only red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
