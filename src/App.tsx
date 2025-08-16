import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadGoods = async (fetchFunc: () => Promise<Good[]>) => {
    try {
      const goods = await fetchFunc();

      setVisibleGoods(goods);
      setError(null);
    } catch {
      setError('Failed to load goods. Please try again.');
      setVisibleGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
