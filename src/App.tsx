import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll().then(setGoods);
  };

  const showFirstFiveGoods = () => {
    get5First().then(setGoods);
  };

  const showRedGoods = () => {
    getRed().then(setGoods);
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
        onClick={showFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
