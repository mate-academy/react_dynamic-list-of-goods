import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(data => setGoods(data));
  };

  const handleLoadFiveFirst = () => {
    get5First().then(data => setGoods(data));
  };

  const handleLoadReadGoods = () => {
    getRedGoods().then(data => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadReadGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
