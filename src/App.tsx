import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const { getAll, get5First, getRedGoods } = goodsAPI;
  const [prepGoods, setPrepGoods] = useState<Good[]>([]);

  function handleClick(getGoods: Promise<Good[]>) {
    getGoods.then(goods => setPrepGoods(goods));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleClick(getAll())}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleClick(get5First())}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleClick(getRedGoods())}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={prepGoods} />
    </div>
  );
};
