import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const handleClickAll = () => {
    getAll()
      .then(goods => setAllGoods(goods));
  };

  const handleClick5First = () => {
    get5First()
      .then(goods => setAllGoods(goods));
  };

  const handleClickGetRedGoods = () => {
    getRedGoods()
      .then(goods => setAllGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
