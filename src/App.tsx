import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadAll = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await getAll();

      setGoods(data);
    } catch {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirstFive = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await get5First();

      setGoods(data);
    } catch {
      setError('Failed to load first 5 goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRed = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch {
      setError('Failed to load red goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={handleLoadAll}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load all goods'}
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoadFirstFive}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load 5 first goods'}
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleLoadRed}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load red goods'}
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
