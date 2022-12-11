import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [loadedGoods, setLoadedGoods] = useState<Good[]>([]);

  const handleClick = (getGoods: Promise<Good[]>) => {
    getGoods.then(setLoadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods())}
      >
        Load red goods
      </button>

      {loadedGoods.length > 0 && (
        <GoodsList goods={loadedGoods} />
      )}

    </div>
  );
};
