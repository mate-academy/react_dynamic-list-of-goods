// src/App.tsx
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadGoods = (fetchFn: () => Promise<Good[]>) => {
    setError(null);
    fetchFn()
      .then(setGoods)
      .catch(err => {
        setError(err.message || 'Something went wrong');
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {}
      {error && (
        <p className="App__error" data-cy="error-message">
          {error}
        </p>
      )}

      {}
      {goods && goods.length === 0 && !error && (
        <p className="App__empty" data-cy="empty-message">
          No goods to display
        </p>
      )}

      <GoodsList goods={goods ?? []} />
    </div>
  );
};
