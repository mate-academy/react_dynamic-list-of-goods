import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickGetAll = async () => {
    getAll().then(allGoods => {
      setGoods(allGoods);
    });
  };

  const handleClickGet5First = () => {
    get5First().then(allGoods => {
      setGoods(allGoods);
    });
  };

  const handleClickGetRedGoods = () => {
    getRedGoods().then(allGoods => {
      setGoods(allGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickGet5First}
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

      <GoodsList goods={goods} />
    </div>
  );
};
