import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type Filter = 'all' | 'first5' | 'red';

export const App: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let loadFn: () => Promise<Good[]>;

    switch (filter) {
      case 'first5':
        loadFn = get5First;
        break;
      case 'red':
        loadFn = getRedGoods;
        break;
      default:
        loadFn = getAll;
    }

    setLoading(true);
    setError('');

    loadFn()
      .then(setGoods)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button data-cy="all-button" onClick={() => setFilter('all')}>
        Load all goods
      </button>
      <button data-cy="first-five-button" onClick={() => setFilter('first5')}>
        Load 5 first goods
      </button>
      <button data-cy="red-button" onClick={() => setFilter('red')}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {!loading && !errorMessage && <GoodsList goods={goods} />}
    </div>
  );
};
