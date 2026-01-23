import React, { useState } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function handleLoadAllGoods() {
    getAll().then(setGoods);
  }

  function handleFiveOfFirst() {
    get5First().then(setGoods);
  }

  function handleOnlyRed() {
    getRedGoods().then(setGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveOfFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
