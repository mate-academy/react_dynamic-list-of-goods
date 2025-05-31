import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const handleGetAllGoods = () => {
    getAll().then(setAllGoods);
  };

  const handleGet5First = () => {
    get5First().then(setAllGoods);
  };

  const handleGetRedGoods = () => {
    getRedGoods().then(setAllGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleGetAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handleGet5First}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handleGetRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
