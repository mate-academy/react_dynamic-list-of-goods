import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getRedGoods, getAll } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goodsList => setGoods(goodsList));
  };

  const loadFirstFiveGoods = () => {
    get5First().then(goodsList => setGoods(goodsList));
  };

  const loadRedGoods = () => {
    getRedGoods().then(goodsList => setGoods(goodsList));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goodsList={goods} />
      {' '}
    </div>
  );
};
