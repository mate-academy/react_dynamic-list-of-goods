import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleFirst5 = async () => {
    const first5 = await get5First();

    setGoods(first5);
  };

  const handleAllRed = async () => {
    const red = await getRedGoods();

    setGoods(red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleAllRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
