import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLoad = async (loader: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loader();

      setGoods(data);
    } catch (e) {
      setError((e as Error).message || 'Something went wrong');
      setGoods([]);
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
        onClick={() => handleLoad(getAll)}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(get5First)}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(getRedGoods)}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {error && (
        <p className="error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
      {!loading && !error && goods.length === 0 && (
        <p className="empty" data-cy="empty-state">
          No goods to display
        </p>
      )}
      {!loading && !error && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
