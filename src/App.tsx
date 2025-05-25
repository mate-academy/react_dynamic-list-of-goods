import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll().then(setAllGoods);
  };

  const showFirst5Goods = () => {
    get5First().then(setAllGoods);
  };

  const showRedGoods = () => {
    getRedGoods().then(setAllGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
