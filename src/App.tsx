import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const loadGoods = async (sortType: Promise<Good[]>) => {
    const goods = await sortType;

    setAllGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
