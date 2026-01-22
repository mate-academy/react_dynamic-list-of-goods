import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAll();

      setGoods(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadFive = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await get5First();

      setGoods(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadRed = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : null}
      <GoodsList goods={goods} />
    </div>
  );
};
