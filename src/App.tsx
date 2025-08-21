import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadAll = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await getAll();

      setGoods(data);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const load5First = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await get5First();

      setGoods(data);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadRed = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await getRedGoods();

      setGoods(data);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
        disabled={loading}
      >
        Load red goods
      </button>

      {error && <p className="App__error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
