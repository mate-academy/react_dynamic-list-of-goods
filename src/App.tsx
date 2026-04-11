import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAll();

      setGoods(data);
    } catch (problem) {
      setError((problem as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loadFirstFive = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await get5First();

      setGoods(data);
    } catch (problem) {
      setError((problem as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loadRed = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (problem) {
      setError((problem as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={loadAll}
        disabled={loading}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={loadFirstFive}
        disabled={loading}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={loadRed}
        disabled={loading}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
