import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<'all' | 'first5' | 'red' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filter) {
      return;
    }

    let isMounted = true;

    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let result: Good[] = [];

        if (filter === 'all') {
          result = await getAll();
        } else if (filter === 'first5') {
          result = await get5First();
        } else if (filter === 'red') {
          result = await getRedGoods();
        }

        if (isMounted) {
          setGoods(result);
        }
      } catch (e) {
        if (isMounted) {
          setError((e as Error).message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter('all')}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter('first5')}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter('red')}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!isLoading && !error && filter && <GoodsList goods={goods} />}
    </div>
  );
};
