import { useState } from 'react';
import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = (loader: () => Promise<Good[]>) => {
    loader()
      .then(loadedGoods => {
        setVisibleGoods(loadedGoods);
        setError(null);
      })
      .catch(() => {
        setError('Failed to load goods. Please try again later.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

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
        onClick={() => handleLoad(getRed)}
      >
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
