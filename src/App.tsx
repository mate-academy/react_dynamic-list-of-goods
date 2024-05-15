import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [good, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(goods => setGoods(goods));
  };

  const handleLoadOf5 = () => {
    get5First().then(goods => setGoods(goods));
  };

  const handleLoadOfRed = () => {
    getRedGoods().then(goods => setGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleLoadOf5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadOfRed}>
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
