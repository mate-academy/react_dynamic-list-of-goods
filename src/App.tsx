import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getRedGoods, get5First, getAll } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [readyGoods, addGoods] = useState<Good[]>([]);

  const handleRedGoodsLoad = async () => {
    const goods = await getRedGoods();

    addGoods(goods);
  };

  const handleSortedGoodsLoad = async () => {
    const goods = await get5First();

    addGoods(goods);
  };

  const handleAllGoodsLoad = async () => {
    const goods = await getAll();

    addGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsLoad}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleSortedGoodsLoad}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsLoad}
      >
        Load red goods
      </button>

      <GoodsList goods={readyGoods} />
    </div>
  );
};
