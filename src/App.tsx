// App.tsx
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [fetchedGoods, setFetchedGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goods => setFetchedGoods(goods));
  };

  const load5FirstGoods = () => {
    get5First().then(goods => setFetchedGoods(goods));
  };

  const loadRedGoods = () => {
    getRedGoods().then(goods => setFetchedGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={fetchedGoods} />
    </div>
  );
};
