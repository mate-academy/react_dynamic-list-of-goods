import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleLoad = (loadFn: () => Promise<Good[]>) => {
    setError('');
    loadFn()
      .then(setGoods)
      .catch(() => setError('Something went wrong. Please try again.'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoad(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
