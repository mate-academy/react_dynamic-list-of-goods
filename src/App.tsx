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

  const handleClickGetFive = async () => {
    try {
      const visibleGoods = await get5First();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  const handleClickGetRed = async () => {
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
        onClick={handleClickGetFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickGetRed}
      >
        Load red goods
      </button>

      {hasLoadingError
        ? <h4> No goods on server</h4>
        : <GoodsList goods={goods} />}
    </div>
  );
};
