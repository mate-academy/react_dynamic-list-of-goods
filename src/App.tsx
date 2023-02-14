import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);
  const [hasError, setHasError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleButton = useCallback((f: Function) => {
    return async () => {
      setHasError(false);

      try {
        const selectedGoods = await f();

        setGoods(selectedGoods);
      } catch {
        setHasError(true);
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleButton(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleButton(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleButton(getRedGoods)}
      >
        Load red goods
      </button>

      {hasError
        ? (
          <p>No goods yet</p>
        ) : (
          <GoodsList goods={goods} />
        )}
    </div>
  );
};
