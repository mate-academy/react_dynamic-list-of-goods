import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const hangleClickGetAll = async () => {
    try {
      const visibleGoods = await getAll();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  const hangleClickGetFive = async () => {
    try {
      const visibleGoods = await get5First();

      setGoods(visibleGoods);
      setHasLoadingError(false);
    } catch {
      setHasLoadingError(true);
    }
  };

  const hangleClickGetRed = async () => {
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
        onClick={hangleClickGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hangleClickGetFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hangleClickGetRed}
      >
        Load red goods
      </button>

      {hasLoadingError
        ? <h4> No goods on server</h4>
        : <GoodsList goods={goods} />}
    </div>
  );
};
