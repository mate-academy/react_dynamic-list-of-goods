import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const getGoods = async (callback: () => Promise<Good[]>) => {
    try {
      const items = await callback();

      setGoods(items);
    } catch {
      setHasLoadingError(true);
    }
  };

  const loadAll = () => getGoods(getAll);
  const load5Firs = () => getGoods(get5First);
  const loadRed = () => getGoods(getRedGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5Firs}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
      >
        Load red goods
      </button>

      {hasLoadingError && (
        <p>Goods can not be loaded</p>
      )}
      <GoodsList goods={goods} />
    </div>
  );
};
