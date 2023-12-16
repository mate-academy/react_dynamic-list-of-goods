import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(setGoods);
  };

  const firstGoods = () => {
    get5First().then((good) => setGoods(good
      .sort((a, b) => a.name.localeCompare(b.name)).splice(0, 5)));
  };

  const findColor = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={findColor}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
