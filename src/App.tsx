import React, { useState, memo } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  const addAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => {});
  };

  const addFiveFirstGoods = () => {
    get5First()
      .then(setGoods)
      .catch(() => {});
  };

  const addRedGoods = () => {
    getRed()
      .then(setGoods)
      .catch(() => {});
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={addAllGoods}>
        load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={addFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={addRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});

App.displayName = 'App';
