import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadGoods = async (loader: () => Promise<Good[]>) => {
    try {
      setLoading(true);
      setError(null);
      const loadedGoods = await loader();
      setGoods(loadedGoods);
    } catch {
      setError('Failed to load goods. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(goodsAPI.getAll)}
          disabled={loading}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(goodsAPI.get5First)}
          disabled={loading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(goodsAPI.getRedGoods)}
          disabled={loading}
        >
          Load red goods
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
