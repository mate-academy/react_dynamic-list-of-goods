import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const { getAll, get5First, getRedGoods } = goodsAPI;
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleGetGoods = (getGoods: Promise<Good[]>) => {
    getGoods.then(goods => setVisibleGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGetGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
