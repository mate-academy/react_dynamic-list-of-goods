import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    try {
      setError(null);
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  }, []);

  const loadFirstFive = useCallback(async () => {
    try {
      setError(null);
      const firstFive = await goodsAPI.get5First();

      setGoods(firstFive);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  }, []);

  const loadRed = useCallback(async () => {
    try {
      setError(null);
      const redGoods = await goodsAPI.getRedGoods();

      setGoods(redGoods);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  }, []);

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

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
