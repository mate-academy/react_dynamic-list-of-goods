import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = useCallback((apiCall: () => Promise<Good[]>) => {
    apiCall()
      .then(data => {
        setGoods(data);
        setError(null);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      });
  }, []);

  const handleLoadAll = useCallback(() => handleLoad(getAll), [handleLoad]);
  const handleLoadFiveFirst = useCallback(
    () => handleLoad(get5First),
    [handleLoad],
  );
  const handleLoadRed = useCallback(() => handleLoad(getRed), [handleLoad]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
