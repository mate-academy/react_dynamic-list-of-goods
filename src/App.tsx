import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const handleGetAll = useCallback(async () => {
    try {
      setGoods(await getAll());
    } catch (error) {
      setIsError(true);
    }
  }, []);

  const handleFirst5Sorted = useCallback(async () => {
    try {
      setGoods(await get5First());
    } catch (error) {
      setIsError(true);
    }
  }, []);

  const handleRedGoods = useCallback(async () => {
    try {
      setGoods(await getRedGoods());
    } catch (error) {
      setIsError(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Sorted}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} isError={isError} />
    </div>
  );
};
