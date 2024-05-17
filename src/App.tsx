import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good, GoodsFilter } from './types/Good';

export const App: React.FC = () => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const handleChangeGood = (buttonName: string) => {
    switch (buttonName) {
      case GoodsFilter.getRedGoods:
        getRedGoods().then(setShowGoods);
        break;
      case GoodsFilter.get5First:
        get5First().then(setShowGoods);
        break;
      default:
        getAll().then(setShowGoods);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleChangeGood(GoodsFilter.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleChangeGood(GoodsFilter.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleChangeGood(GoodsFilter.getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={showGoods} />
    </div>
  );
};
