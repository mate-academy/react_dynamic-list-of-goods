import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [displayGoods, setDisplayGoods] = useState<Good[]>([]);

  function handleGoodsAll() {
    getAll().then(goods => {
      setDisplayGoods(goods);
    });
  }

  function handlegoods5First() {
    get5First().then(goods => {
      setDisplayGoods(goods);
    });
  }

  function handleGoodsRed() {
    getRed().then(goods => {
      setDisplayGoods(goods);
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGoodsAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlegoods5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGoodsRed}>
        Load red goods
      </button>

      <GoodsList goods={displayGoods} />
    </div>
  );
};
