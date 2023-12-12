import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    getAll().then((allGoods) => setGoods(allGoods));
  };

  const loadFive = () => {
    get5First().then((allGoods) => setGoods(allGoods));
  };

  const loadRed = () => {
    getRedGoods().then((allGoods) => setGoods(allGoods));
  };

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
        onClick={loadFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
