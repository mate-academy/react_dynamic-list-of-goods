import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(value => setGoods(value));
  };

  const fiveFirst = () => {
    get5First().then(value => setGoods(value));
  };

  const allRed = () => {
    getRedGoods().then(value => setGoods(value));
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="container">
        <button
          type="button"
          data-cy="all-button"
          className="button"
          onClick={allGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button"
          onClick={fiveFirst}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button"
          onClick={allRed}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
