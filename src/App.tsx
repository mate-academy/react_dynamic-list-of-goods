import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAll = () => {
    setError('');
    getAll()
      .then(loadedGoods => setGoods(loadedGoods))
      .catch(() => setError('Failed to load goods'));
  };

  const load5First = () => {
    setError('');
    get5First()
      .then(loadedGoods => setGoods(loadedGoods))
      .catch(() => setError('Failed to load goods'));
  };

  const loadOnlyRed = () => {
    setError('');
    getRedGoods()
      .then(loadedGoods => setGoods(loadedGoods))
      .catch(() => setError('Failed to load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadOnlyRed}>
        Load red goods
      </button>
      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
