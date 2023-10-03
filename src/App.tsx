import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [loadedGoods, setLoadedGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goods => {
      setLoadedGoods(goods);
    });
  };

  const load5FirstGoods = () => {
    get5First().then(goods => {
      setLoadedGoods(goods);
    });
  };

  const loadRedGoods = () => {
    getRed().then(goods => {
      setLoadedGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
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

      <GoodsList goods={loadedGoods} />
    </div>
  );
};
