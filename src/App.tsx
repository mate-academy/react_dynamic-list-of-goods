import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [state, setState] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = (fetchFunc: () => Promise<Good[]>) => {
    fetchFunc()
      .then(goods => {
        setState(goods);
        setError(null); // Clear previous error
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch goods:', err);
        setError('Failed to load goods. Please try again later.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleFetch(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFetch(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleFetch(getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={state} />
    </div>
  );
};
