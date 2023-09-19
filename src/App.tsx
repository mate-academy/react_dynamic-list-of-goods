import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsShowed, setGoodsShowed] = useState<Good[]>([]);

  const loadAll = () => {
    getAll().then(setGoodsShowed);
  };

  const loadFive = () => {
    get5First().then(setGoodsShowed);
  };

  const loadRed = () => {
    getRedGoods().then(setGoodsShowed);
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
        onClick={loadFive}
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

      <GoodsList goods={goodsShowed} />
    </div>
  );
};
