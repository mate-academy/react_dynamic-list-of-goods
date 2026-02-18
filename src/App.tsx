import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadWithHandling = async (loadFn: () => Promise<Good[]>) => {
    try {
      const loadedGoods = await loadFn();

      setGoods(loadedGoods);
      setError(null);
    } catch (err) {
      setError('Failed to load goods');
    }
  };

  const loadAll = () => loadWithHandling(goodsAPI.getAll);

  const loadFirstFive = () => loadWithHandling(goodsAPI.get5First);

  const loadRed = () => loadWithHandling(goodsAPI.getRedGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
