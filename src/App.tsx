import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [filterGoods, setFilterGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = (loader: () => Promise<Good[]>) => {
    loader()
      .then(loadedGoods => {
        setFilterGoods(loadedGoods);
      })
      .catch(e => setError(e.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {error && <p>{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoad(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={filterGoods} />
    </div>
  );
};
