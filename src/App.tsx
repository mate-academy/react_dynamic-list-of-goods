/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(goodsList => setGoods(goodsList));
  };

  const getFirstGoods = () => {
    get5First().then(goodsList => setGoods(goodsList));
  };

  const getRedColor = () => {
    getRedGoods().then(goodsList => setGoods(goodsList));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedColor}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
