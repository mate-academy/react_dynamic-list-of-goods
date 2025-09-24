import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAll();

      setGoods(data);
    } catch (err) {
      setError('Failed to load goods');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirstFive = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await get5First();

      setGoods(data);
    } catch {
      setError('Failed to load first 5 goods');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRedGoods = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch {
      setError('Failed to load red goods');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
