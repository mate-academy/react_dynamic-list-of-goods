import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const takeAllGoods = () => {
    getAll().then(setGoods);
  };

  const take5Goods = () => {
    get5First().then(setGoods);
  };

  const takeRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={takeAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={take5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={takeRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
