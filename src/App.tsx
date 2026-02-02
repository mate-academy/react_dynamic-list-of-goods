import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    setError(null);

    getAll()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  const handleLoadFirstFive = () => {
    setError(null);

    get5First()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  const handleLoadRedGoods = () => {
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

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {error && <p className="error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
