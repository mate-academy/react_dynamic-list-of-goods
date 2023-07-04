import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(goods => {
      setGood(goods);
    });
  };

  const handleLoad5Goods = () => {
    get5First().then(goods => {
      setGood(goods);
    });
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then(goods => {
      setGood(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
