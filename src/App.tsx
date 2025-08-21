import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGoods = (apiCall: () => Promise<Good[]>) => {
    setIsLoading(true);
    setError(null);

    apiCall()
      .then(response => setGoods(response))
      .catch(() => setError('Failed to load goods'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
