import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = async (loader: () => Promise<Good[]>) => {
    try {
      setError('');

      const loadedGoods = await loader();

      setGoods(loadedGoods);
    } catch {
      setError('Failed to load goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
