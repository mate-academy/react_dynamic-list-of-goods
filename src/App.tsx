import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = async (loader: () => Promise<Good[]>) => {
    try {
      const data = await loader();

      setList(data);
      setError(null);
    } catch (e) {
      setError('Failed to load goods. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
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
      </div>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={list} />
    </div>
  );
};
