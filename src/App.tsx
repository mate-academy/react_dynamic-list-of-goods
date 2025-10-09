import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = useCallback(async (loader: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loader();

      setGoods(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

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

      {loading && <p>Loading goods...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
