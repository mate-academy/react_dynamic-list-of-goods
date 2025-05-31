import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = () => {
    getAll().then(setGoods);

    return;
  };

  const handleRed = () => {
    getRedGoods().then(setGoods);

    return;
  };

  const handle5First = () => {
    get5First().then(setGoods);

    return;
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
