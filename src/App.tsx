import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (fetchFn: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFn();

      setGoods(result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unknown error');
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
        onClick={() => loadData(getAll)}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadData(get5First)}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadData(getRedGoods)}
        disabled={loading}
      >
        Load red goods
      </button>

      {error && <div className="App__error">{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
