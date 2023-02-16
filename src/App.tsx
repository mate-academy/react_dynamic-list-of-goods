import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleGetAllGoods = useCallback(async () => {
    setHasError(false);
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  const handleGetFirstFiveGoods = useCallback(async () => {
    setHasError(false);
    try {
      const firstFiveGoods = await get5First();

      setGoods(firstFiveGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  const handleGetRedGoods = useCallback(async () => {
    setHasError(false);
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>
      {hasError
        ? <p>Some problems on the server</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
