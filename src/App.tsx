import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAl = () => {
    getAll().then(data => setGoods(data));
  };

  const getFirstFive = () => {
    get5First().then(data => setGoods(data));
  };

  const getOnlyRed = () => {
    getRedGoods().then(data => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAl}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
