import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = () => {
    setError(null);

    getAll()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  const loadFirstFiveGoods = () => {
    setError(null);

    get5First()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  const loadRedGoods = () => {
    setError(null);

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button data-cy="first-five-button" onClick={loadFirstFiveGoods}>
        Load 5 first goods
      </button>

      <button data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
