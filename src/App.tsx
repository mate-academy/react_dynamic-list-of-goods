import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    goodsAPI.getAll().then((goodsData) => setGoods(goodsData));
  };

  const load5First = () => {
    goodsAPI.get5First().then((goodsData) => setGoods(goodsData));
  };

  const loadRed = () => {
    goodsAPI.getRedGoods().then((goodsData) => setGoods(goodsData));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
