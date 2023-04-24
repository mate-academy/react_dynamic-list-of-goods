import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [currGoods, setCurrGoods] = useState<Good[]>([]);

  async function loadAll() {
    const goods: Good[] = await getAll();

    setCurrGoods(goods);
  }

  async function load5first() {
    const goods: Good[] = await get5First();

    setCurrGoods(goods);
  }

  async function loadRedGoods() {
    const goods: Good[] = await getRedGoods();

    setCurrGoods(goods);
  }

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
        onClick={load5first}
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

      <GoodsList goods={currGoods} />
    </div>
  );
};
