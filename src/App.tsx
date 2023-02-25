import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const handleClickGetAll = async () => {
    try {
      const visibleGoods = await getAll();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  const handleClickGet5First = async () => {
    try {
      const visibleGoods = await get5First();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  const handleClickGetRedGoods = async () => {
    try {
      const visibleGoods = await getRedGoods();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickGetRedGoods}
      >
        Load red goods
      </button>

      {hasLoadingError
        ? <p>No goods yet</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
