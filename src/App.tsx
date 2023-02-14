import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    const goodsAll = await getAll();

    setVisibleGoods(goodsAll);
  };

  const handle5Goods = async () => {
    const goods5First = await get5First();

    setVisibleGoods(goods5First);
  };

  const handleRedGoods = async () => {
    const goodsRed = await getRedGoods();

    setVisibleGoods(goodsRed);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleAllGoods}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
