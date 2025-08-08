import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = useCallback((fetchFunc: () => Promise<Good[]>) => {
    setIsLoading(true);

    fetchFunc()
      .then(goodsData => {
        setGoods(goodsData);
        setError(null);
      })
      .catch((err: unknown) => {
        const message =
          err instanceof Error ? err.message : 'An unknown error occurred.';

        setError(`Failed to load goods. ${message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleFetch(getAll)}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load all goods'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFetch(get5First)}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load 5 first goods'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleFetch(getRedGoods)}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load red goods'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
