import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    const allGoods = await goodsAPI.getAll();

    setGoods(allGoods);
  };

  const loadFirst5Goods = async () => {
    const first5Goods = await goodsAPI.get5First();

    setGoods(first5Goods || []);
  };

  const loadRedGoods = async () => {
    const getRedGoods = await goodsAPI.getRedGoods();

    setGoods(getRedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
