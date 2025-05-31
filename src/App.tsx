import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const sortGoods = () => {
    get5First().then(arr => setGoods(arr));
  };

  const allGoods = () => {
    getAll().then(arr => setGoods(arr));
  };

  const redGoods = () => {
    getRedGoods().then(arr => setGoods(arr));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={sortGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
