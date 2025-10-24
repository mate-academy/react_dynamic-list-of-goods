import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async (fn: () => Promise<Good[]>) => {
    try {
      setError(null);
      setLoading(true);
      const data = await fn();

      setGoods(data);
    } catch {
      setError('Не удалось загрузить товары');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => load(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => load(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => load(getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}
      {loading ? <p>Loading…</p> : <GoodsList goods={goods} />}
    </div>
  );
};
