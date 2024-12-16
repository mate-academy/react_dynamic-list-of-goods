import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadAllGoods = () => {
    setIsLoading(true);
    setError(null);
    getAll()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'))
      .finally(() => setIsLoading(false));
  };

  const load5FirstGoods = () => {
    setIsLoading(true);
    setError(null);
    get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'))
      .finally(() => setIsLoading(false));
  };

  const loadRedGoods = () => {
    setIsLoading(true);
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={loadAllGoods}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load all goods'}
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={load5FirstGoods}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load 5 first goods'}
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={loadRedGoods}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load red goods'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
