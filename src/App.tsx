import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function loadAll() {
    const allGoods = await getAll();

    setGoods(allGoods);
  }

  async function load5First() {
    const firstGoods = await get5First();
    const sortedGoods = firstGoods.sort((a, b) => a.name.localeCompare(b.name));
    const first5Goods = sortedGoods.slice(0, 5);

    setGoods(first5Goods);
  }

  async function loadRed() {
    const redGoods = await getRedGoods();

    setGoods(redGoods.filter(good => good.color === 'red').slice(0, 5));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAll} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={load5First} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
