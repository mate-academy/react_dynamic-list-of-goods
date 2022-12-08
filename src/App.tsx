import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [loadedGoods, setLoadedGoods] = useState<Good[]>([]);

  const loadGoods = (getGoods: Promise<Good[]>) => {
    getGoods.then(setLoadedGoods);
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
        onClick={() => loadGoods(getRed())}
      >
        Load red goods
      </button>

      {+loadedGoods.length && (
        <GoodsList goods={loadedGoods} />
      )}
    </div>
  );
};
