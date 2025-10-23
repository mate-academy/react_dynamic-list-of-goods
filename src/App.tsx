import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch (err) {
      setError('Failed to load all goods');
    } finally {
      setLoading(false);
    }
  }, []);

  const load5First = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const first5 = await goodsAPI.get5First();

      setGoods(first5);
    } catch (err) {
      setError('Failed to load first 5 goods');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadRed = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const redGoods = await goodsAPI.getRedGoods();

      setGoods(redGoods);
    } catch (err) {
      setError('Failed to load red goods');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
