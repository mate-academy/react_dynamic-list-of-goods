import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
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
      setError('Failed to load goods. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadAll = useCallback(() => handleLoad(goodsAPI.getAll), [handleLoad]);
  const load5First = useCallback(
    () => handleLoad(goodsAPI.get5First),
    [handleLoad],
  );
  const loadRed = useCallback(() => handleLoad(goodsAPI.getRed), [handleLoad]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading goods...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
