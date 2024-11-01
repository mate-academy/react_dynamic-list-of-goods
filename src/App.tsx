import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getAll() {
    getAllGoods().then(setGoods);
  }

  function get5Firs() {
    get5FirstGoods().then(setGoods);
  }

  function getRed() {
    getRedGoods().then(setGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5Firs}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
