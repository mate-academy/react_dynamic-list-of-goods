import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    const goodsFromServer = await getAll();

    setGoods(goodsFromServer);
  };

  const loadFirstFiveGoods = async () => {
    const goodsFromServer = await get5First();

    setGoods(goodsFromServer);
  };

  const loadGoodsWithRedColor = async () => {
    const goodsFromServer = await getRedGoods();

    setGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadGoodsWithRedColor}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
