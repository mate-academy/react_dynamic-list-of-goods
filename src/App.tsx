import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    const newGoods = await getAll();

    setGoods(newGoods);
  };

  const load5Goods = async () => {
    const newGoods = await get5First();

    setGoods(newGoods);
  };

  const loadRed = async () => {
    const newGoods = await getRedGoods();

    setGoods(newGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
