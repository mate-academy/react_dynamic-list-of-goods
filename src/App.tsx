import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const get5Goods = async () => {
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
  };

  const getRedGoods = async () => {
    const redGoods = await getRed();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>

  );
};
