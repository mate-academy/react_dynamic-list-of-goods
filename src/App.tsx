import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [sortedGoods, setSortedGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(setSortedGoods);
  };

  const first5Goods = () => {
    get5First().then(setSortedGoods);
  };

  const onlyRedGoods = () => {
    getRedGoods().then(setSortedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={first5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={onlyRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={sortedGoods} />
    </div>
  );
};
