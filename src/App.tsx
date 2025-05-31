import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = () => {
    getAll().then(setGoods);
  };

  const show5Goods = () => {
    get5First().then(setGoods);
  };

  const showRedGoods = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
