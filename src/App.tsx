import './App.scss';
import { GoodsList } from './GoodsList';
import { useState, useCallback } from 'react';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const loadAll = useCallback(() => {
    getAll()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(err => setError(err.message));
  }, []);

  const loadFirstFive = useCallback(() => {
    get5First()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(err => setError(err.message));
  }, []);

  const loadRed = useCallback(() => {
    getRedGoods()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {error && <p>{error}</p>}
    </div>
  );
};
