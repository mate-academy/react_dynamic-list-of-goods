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
      .then(fetchedGoods => setGoods(fetchedGoods))
      .catch(err => setError(err.message));
  };

  const handleLoadFirst5 = () => {
    setError(null);
    get5First()
      .then(fetchedGoods => setGoods(fetchedGoods))
      .catch(err => setError(err.message));
  };

  const handleLoadRed = () => {
    setError(null);
    getRedGoods()
      .then(fetchedGoods => setGoods(fetchedGoods))
      .catch(err => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && (
        <p style={{ color: 'red' }} data-cy="error-message">
          {error}
        </p>
      )}

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
