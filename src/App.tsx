import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [allGoods, setAllGoods] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadGoods = useCallback((functionSort: () => Promise<Good[]>) => {
    setError(null);

    functionSort()
      .then(data => {
        setGoods(data);
        setAllGoods(true);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error-message">{error}</p>}

      <button
        type="button"
        onClick={() => loadGoods(getAll)}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(get5First)}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(getRedGoods)}
        data-cy="red-button"
      >
        Load red goods
      </button>

      {allGoods && !error && <GoodsList goods={goods} />}
    </div>
  );
};
