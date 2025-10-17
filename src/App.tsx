import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGoods = useCallback((fetchFn: () => Promise<Good[]>) => {
    setLoading(true);
    fetchFn()
      .then(setGoods)
      .catch(err => {
        const message = err instanceof Error ? err.message : String(err);

        setError(message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchGoods(goodsAPI.getAll)}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchGoods(goodsAPI.get5First)}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchGoods(goodsAPI.getRedGoods)}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading && <Loader />}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
