import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllGoodsButton = () => {
    getAll()
      .then(setGoods)
      .catch(() => {});
  };

  const handleGetFirstFiveGoodsButton = () => {
    get5First()
      .then(setGoods)
      .catch(() => {});
  };

  const handleGetRedGoodsButton = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => {});
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoodsButton}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirstFiveGoodsButton}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoodsButton}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
