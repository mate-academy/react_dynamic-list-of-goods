import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoad = async (fn: () => Promise<Good[]>) => {
    setLoading(true);

    try {
      const res = await fn();

      setGoods(res);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);

      alert(`Failed to load Goods: ${message}`);
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
        onClick={() => handleLoad(goodsAPI.getAll)}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(goodsAPI.get5First)}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(goodsAPI.getRedGoods)}
        disabled={loading}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
