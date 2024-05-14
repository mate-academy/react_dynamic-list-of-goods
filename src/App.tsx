import React, { useState } from 'react';

import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

import './App.scss';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = () => {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handle5First = () => {
    get5First().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
