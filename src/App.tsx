import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setError(null);
          getAll()
            .then(setGoods)
            .catch(err => setError(err.message || 'Failed to fetch goods'));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setError(null);
          get5First()
            .then(setGoods)
            .catch(err => setError(err.message || 'Failed to fetch goods'));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setError(null);
          getRedGoods()
            .then(setGoods)
            .catch(err => setError(err.message || 'Failed to fetch goods'));
        }}
      >
        Load red goods
      </button>

      {error && <p className="App__error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
