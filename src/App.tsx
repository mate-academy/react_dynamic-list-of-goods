import React, { useMemo, useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

const MemoizedGoodsList = React.memo(GoodsList);

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = async (loadFunction: () => Promise<Good[]>) => {
    setError(null);
    try {
      const data = await loadFunction();

      setGoods(data);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to load goods. Please try again.',
      );
    }
  };

  const visibleGoods = useMemo(() => goods, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error">{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoad(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(getRedGoods)}
      >
        Load red goods
      </button>

      <MemoizedGoodsList goods={visibleGoods} />
    </div>
  );
};
