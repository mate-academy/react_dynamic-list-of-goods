import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  function handleLoadAll() {
    getAll().then(setGoodsToShow);
  }

  function handleLoadFive() {
    get5First().then(setGoodsToShow);
  }

  function handleLoadRed() {
    getRedGoods().then(setGoodsToShow);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {goodsToShow.length > 0 && <GoodsList goods={goodsToShow} />}
    </div>
  );
};
