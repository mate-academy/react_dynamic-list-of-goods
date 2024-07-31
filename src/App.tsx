import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(setGoods);
  };

  const loadFirst5Goods = () => {
    get5First().then(setGoods);
  };

  const loadRedGoods = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={loadFirst5Goods}
        type="button"
        data-cy="first-five-button"
      >
        Load first 5 goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
