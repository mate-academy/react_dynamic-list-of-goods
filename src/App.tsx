import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const hangleClickGetAll = async () => {
    const visibleGoods = await getAll();

    setGoods(visibleGoods);
  };

  const hangleClickGetFive = async () => {
    const visibleGoods = await get5First();

    setGoods(visibleGoods);
  };

  const hangleClickGetRed = async () => {
    const visibleGoods = await getRedGoods();

    setGoods(visibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={hangleClickGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hangleClickGetFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hangleClickGetRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
