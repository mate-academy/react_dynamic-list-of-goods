import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goood, setGoods] = useState<Good[]>([]);

  const handlerAll = () => (
    getAll().then(goods => setGoods(goods))
  );

  const handlerSort = () => (
    get5First().then(goods => setGoods(goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5)))
  );

  const handlerFilter = () => (
    getRedGoods().then(goods => setGoods(goods
      .filter(good => good.color === 'red')))
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlerAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerSort}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerFilter}
      >
        Load red goods
      </button>

      <GoodsList goods={goood} />
    </div>
  );
};
