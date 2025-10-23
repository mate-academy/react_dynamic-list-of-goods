import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = useCallback(async (loader: () => Promise<Good[]>) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await loader();

      setGoods(data);
    } catch (e) {
      setError('Failed to load goods');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => handleLoad(getAll)}
          disabled={isLoading}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleLoad(get5First)}
          disabled={isLoading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleLoad(getRedGoods)}
          disabled={isLoading}
        >
          Load red goods
        </button>
      </div>

      {isLoading && <p className="App__status">Loading...</p>}
      {error && <p className="App__error">{error}</p>}
      {!isLoading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
