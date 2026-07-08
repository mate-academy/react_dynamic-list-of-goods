import React, { useState } from 'react';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods as getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function handleLoadAll() {
    getAll().then(setGoods);
  }

  function handleLoadFirstFive() {
    get5First().then(setGoods);
  }

  function handleLoadRed() {
    getRed().then(setGoods);
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
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
