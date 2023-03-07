import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function fetchAll() {
    const allGoods = await getAll();

    setGoods(allGoods);
  }

  async function fetch5First() {
    const selectedGoods = await get5First();

    setGoods(selectedGoods);
  }

  async function fetchRedGoods() {
    const filteredGoods = await getRedGoods();

    setGoods(filteredGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={fetchAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetch5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={fetchRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};
