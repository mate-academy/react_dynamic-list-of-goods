import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleloadAllGoods = () => {
    getAll().then(setGoods);
  };

  const handleloadFiveGoods = () => {
    get5First().then(setGoods);
  };

  const handleloadRedGoods = () => {
    getRed().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleloadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleloadFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleloadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
