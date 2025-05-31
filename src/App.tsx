import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fiveFirstArray = () => {
    get5First().then(setGoods);
  };

  const redGoodsArray = () => {
    getRedGoods().then(setGoods);
  };

  const fetchAllGoods = () => {
    getAll().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={fetchAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={fiveFirstArray}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={redGoodsArray} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
