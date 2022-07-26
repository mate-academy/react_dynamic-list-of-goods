import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [Goods, setGoods] = useState<Good[]>([]);

  const goodsEnter = async (callback: () => Promise<Good[]>) => {
    const info = await callback();

    setGoods(info);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <div className="App__buttons">
        <button
          className="button is-focused"
          type="button"
          data-cy="all-button"
          onClick={() => goodsEnter(getAll)}
        >
          Load all goods
        </button>

        <button
          className="button is-focused"
          type="button"
          data-cy="first-five-button"
          onClick={() => goodsEnter(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-focused"
          type="button"
          data-cy="red-button"
          onClick={() => goodsEnter(getRed)}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={Goods} />
    </div>
  );
};
