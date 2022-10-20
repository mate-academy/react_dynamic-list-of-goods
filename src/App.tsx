import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goood, setGoods] = useState<Good[]>([]);

  const handler1 = () => (
    getAll().then(goods => setGoods(goods))
  );

  const handler2 = () => (
    get5First().then(goods => setGoods(goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(good => good.id < 6)))
  );

  const handler3 = () => (
    getRedGoods().then(goods => setGoods(goods
      .filter(good => good.color === 'red')))
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handler1}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handler2}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handler3}
      >
        Load red goods
      </button>

      <GoodsList goods={goood} />
    </div>
  );
};
