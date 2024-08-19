import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoodsButtonClick = () => {
    getAll().then(fetchetGoods => setGoods(fetchetGoods));
  };

  const someGoodsButtonClick = () => {
    get5First().then(fetchetGoods => setGoods(fetchetGoods));
  };

  const redGoodsButtonClick = () => {
    getRedGoods().then(fetchetGoods => setGoods(fetchetGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoodsButtonClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={someGoodsButtonClick}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoodsButtonClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
