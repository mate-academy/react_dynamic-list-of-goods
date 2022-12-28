import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import {
  getAll,
  get5First,
  getRed,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    const newGoods: Good[] = await getAll();

    setGoods(newGoods);
  };

  const handleGet5First = async () => {
    const newGoods: Good[] = await get5First();

    setGoods(newGoods);
  };

  const handleGetRedGoods = async () => {
    const newGoods: Good[] = await getRed();

    setGoods(newGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
