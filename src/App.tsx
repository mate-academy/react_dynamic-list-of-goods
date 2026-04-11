import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import type { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = (): void => {
    getAll().then(data => setGoods(data));
  };

  const show5First = (): void => {
    get5First().then(data => setGoods(data));
  };

  const showRed = (): void => {
    getRedGoods().then(data => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
