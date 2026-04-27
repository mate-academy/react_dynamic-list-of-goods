import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchGoods = async (fetcher: () => Promise<Good[]>) => {
    try {
      setGoods(null);
      setIsLoading(true);
      setError('');

      const data = await fetcher();
      setGoods(data);
    } catch {
      setError('Failed to load goods');
    } finally {
      setIsLoading(false);
    }
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

      {error && <p>{error}</p>}

      <GoodsList goods={goods} isLoading={isLoading} />
    </div>
  );
};
