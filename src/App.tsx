import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [sortedGoods, setSortedGoods] = useState<Good[]>([]);

  const handleButtonClick = (sortType: string) => {
    if (sortType === 'getAll') {
      getAll().then(goods => setSortedGoods(goods));
    }

    if (sortType === 'get5First') {
      get5First().then(goods => setSortedGoods(goods));
    }

    if (sortType === 'getRedGoods') {
      getRedGoods().then(goods => setSortedGoods(goods));
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleButtonClick('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleButtonClick('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleButtonClick('getRedGoods')}
      >
        Load red goods
      </button>

      <GoodsList goods={sortedGoods} />
    </div>
  );
};
