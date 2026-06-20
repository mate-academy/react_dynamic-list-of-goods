import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const load = (fetcher: () => Promise<Good[]>) => {
    setError(null);
    fetcher()
      .then(setGoods)
      .catch((err: Error) => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => load(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => load(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => load(getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
