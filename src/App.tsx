import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function handleAllGoods() {
    getAll().then(setGoods);
  }

  function handle5FirstGoods() {
    get5First().then(setGoods);
  }

  function handleRedGoods() {
    getRed().then(setGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
