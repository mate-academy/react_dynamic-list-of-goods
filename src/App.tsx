import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type Mode = 'all' | 'five' | 'red' | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [mode, setMode] = useState<Mode>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mode) {
      return;
    }

    setLoading(true);
    setError(null);

    let fetcher: (() => Promise<Good[]>) | null = null;

    if (mode === 'all') {
      fetcher = getAll;
    } else if (mode === 'five') {
      fetcher = get5First;
    } else if (mode === 'red') {
      fetcher = getRedGoods;
    }

    if (fetcher) {
      fetcher()
        .then(setGoods)
        .catch(err => setError(err.message || 'Failed to load goods'))
        .finally(() => setLoading(false));
    }
  }, [mode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setMode('all')}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMode('five')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setMode('red')}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
