import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // HandlerClicks
  const handleLoadAllGoodsClick = () => {
    getAll().then(setGoods);
  };

  const handleLoadFirstFiveGoodsClick = () => {
    get5First().then(setGoods);
  };

  const handleLoadRedGoodsClick = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFiveGoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
