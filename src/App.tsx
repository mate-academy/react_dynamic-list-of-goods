import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const LoadAll = () => {
    getAll().then(setGoods);
  };

  const Load5First = () => {
    get5First().then(setGoods);
  };

  const LoadRedGoods = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={LoadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={Load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={LoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
