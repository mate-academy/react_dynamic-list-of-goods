import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const loadWithDelay = async (callback: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const [res] = await Promise.all([callback(), delay(500)]);

      setGoods(res);
    } catch (e) {
      setError((e as Error).message || String(e));
    } finally {
      setLoading(false);
    }
  };

  const loadAllHandler = useCallback(() => {
    loadWithDelay(getAll);
  }, []);

  const load5FirstHandler = useCallback(() => {
    loadWithDelay(get5First);
  }, []);

  const loadRedHandler = useCallback(() => {
    loadWithDelay(getRedGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllHandler}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstHandler}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedHandler}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
