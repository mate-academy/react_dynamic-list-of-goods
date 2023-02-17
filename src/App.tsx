import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleAll = useCallback(async () => {
    setHasError(false);

    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  const handleGet5First = useCallback(async () => {
    setHasError(false);

    try {
      const firstFive = await get5First();

      setGoods(firstFive);
    } catch {
      setHasError(true);
    }
  }, []);

  const hanldeGetRedColor = useCallback(async () => {
    setHasError(false);

    try {
      const redColor = await getRedGoods();

      setGoods(redColor);
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
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hanldeGetRedColor}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {hasError && (
        <p className="error">
          Unable to show goods
        </p>
      )}
    </div>
  );
};
