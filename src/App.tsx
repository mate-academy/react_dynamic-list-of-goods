import { FC, useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleGetAll = useCallback(async () => {
    setHasError(false);

    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  const handleGetFirst5 = useCallback(async () => {
    setHasError(false);

    try {
      const first5 = await get5First();

      setGoods(first5);
    } catch {
      setHasError(true);
    }
  }, []);

  const handleGetReds = useCallback(async () => {
    setHasError(false);

    try {
      const reds = await getRedGoods();

      setGoods(reds);
    } catch {
      setHasError(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetReds}>
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {hasError && (
        <p className="error">
          Unable to fetch goods
        </p>
      )}
    </div>
  );
};
