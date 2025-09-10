import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleLoadAll = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAll();

      setGoods(data);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error';

      setError(`Failed to load goods: ${msg}`);
      setGoods([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadFirstFive = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await get5First();

      setGoods(data);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error';

      setError(`Failed to load first 5 goods: ${msg}`);
      setGoods([]);
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
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error';

      setError(`Failed to load red goods: ${msg}`);

      setGoods([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={handleLoadAll}
          disabled={loading}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoadFirstFive}
          disabled={loading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleLoadRed}
          disabled={loading}
        >
          Load red goods
        </button>
      </div>

      {loading && <p data-cy="loading">Loading…</p>}

      {error && (
        <p data-cy="error" style={{ color: 'crimson' }}>
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
