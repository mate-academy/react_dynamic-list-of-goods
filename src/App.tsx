import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    setIsLoading(true);
    setError(null);
    setGoods([]);

    getAll()
      .then(setGoods)
      .catch(() => {
        setError(`Failed to load goods`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoadFirstFive = () => {
    setIsLoading(true);
    setError(null);
    setGoods([]);

    get5First()
      .then(setGoods)
      .catch(() => {
        setError(`Failed to load 5 first goods`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoadRed = () => {
    setIsLoading(true);
    setError(null);
    setGoods([]);

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError(`Failed to load red goods`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRed}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading && <div data-cy="loader">Loading...</div>}
      {error && <div data-cy="error">{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
