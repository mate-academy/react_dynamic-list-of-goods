import React, { useState } from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = () => {
    getAll().then(setGoods);
  };

  const loadFiveFirstGoods = () => {
    get5First().then(setGoods);
  };

  const loadRedGoods = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={loadGoods}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={loadFiveFirstGoods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={loadRedGoods}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};
