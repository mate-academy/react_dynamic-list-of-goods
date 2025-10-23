import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadGoods = useCallback(async (loader: () => Promise<Good[]>) => {
    setLoading(true);
    setError(null);
    setGoods([]);

    try {
      const fetchedGoods = await loader();

      setGoods(fetchedGoods);
    } catch (err) {
      setError('Error');
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
        onClick={() => loadGoods(getAll)}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
        disabled={loading}
      >
        Load red goods
      </button>

      {!error && <GoodsList goods={goods} />}
    </div>
  );
};
