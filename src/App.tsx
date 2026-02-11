import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'all' | 'first-five' | 'red' | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mode) {
      return;
    }

    setError(null);
    setLoading(true);

    const call =
      mode === 'all' ? getAll : mode === 'first-five' ? get5First : getRedGoods;

    call()
      .then(setGoods)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
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
        onClick={() => setMode('first-five')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setMode('red')}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
