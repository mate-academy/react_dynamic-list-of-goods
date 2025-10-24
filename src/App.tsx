import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = (apiCall: () => Promise<Good[]>) => {
    setError(null);

    apiCall()
      .then(fetchedGoods => setGoods(fetchedGoods))
      .catch(() => setError('Failed to load goods. Please try again later.'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleLoad(getAll)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleLoad(get5First)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleLoad(getRedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {error && <p className="error-message">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
