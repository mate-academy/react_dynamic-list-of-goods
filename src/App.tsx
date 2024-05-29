import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setAll = () => {
    getAll().then(setGoods);
  };

  const setFirst5 = () => {
    get5First().then(setGoods);
  };

  const setRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFirst5()}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setRed()}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
