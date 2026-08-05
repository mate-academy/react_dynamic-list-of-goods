import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loadAll = useCallback(() => {
    setLoading(true);
    setError('');

    getAll()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const load5First = useCallback(() => {
    setLoading(true);
    setError('');

    get5First()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const loadRedGoods = useCallback(() => {
    setLoading(true);
    setError('');

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
