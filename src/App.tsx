import React, { useState, useCallback } from 'react';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = useCallback(async () => {
    try {
      setError(null);
      const data = await goodsAPI.getAll();

      setGoods(data);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  const load5FirstGoods = useCallback(async () => {
    try {
      setError(null);
      const data = await goodsAPI.get5First();

      setGoods(data);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  const loadRedGoods = useCallback(async () => {
    try {
      setError(null);
      const data = await goodsAPI.getRedGoods();

      setGoods(data);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of goods</h1>

      <button data-cy="all-button" onClick={loadAllGoods}>
        Load All goods
      </button>

      <button data-cy="first-five-button" onClick={load5FirstGoods}>
        Load 5 first goods
      </button>

      <button data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
