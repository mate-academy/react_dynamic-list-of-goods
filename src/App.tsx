/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAllGoods = useCallback(() => {
    setError('');

    getAll()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  }, []);

  const loadFirstFiveGoods = useCallback(() => {
    setError('');

    get5First()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  }, []);

  const loadRedGoods = useCallback(() => {
    setError('');

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
