import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoodsBtn = () => {
    getAll()
      .then(setGoods);
  };

  const handleFiveGoodsBtn = () => {
    get5First()
      .then(setGoods);
  };

  const handleRedGoodsBtn = () => {
    getRedGoods()
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsBtn}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoodsBtn}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsBtn}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
