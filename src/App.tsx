import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadGoods = async (loadFn: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const loadedGoods = await loadFn();

      setGoods(loadedGoods);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load all goods'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load 5 first goods'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load red goods'}
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
