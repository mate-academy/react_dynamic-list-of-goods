import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async (loader: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loader();

      setGoods(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadAll = useCallback(() => run(goodsAPI.getAll), [run]);
  const loadFirs5 = useCallback(() => run(goodsAPI.get5First), [run]);
  const loadRed = useCallback(() => run(goodsAPI.getRedGoods), [run]);

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
        onClick={loadFirs5}
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

      {loading && <p data-cy="loading">Loading...</p>}
      {error && (
        <p data-cy="error" style={{ color: 'crimson' }}>
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
