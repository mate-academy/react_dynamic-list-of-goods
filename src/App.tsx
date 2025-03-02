import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => setError('Failed to load all goods')); // Removed 'err'
  };

  const loadFirstFiveGoods = () => {
    get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load first five goods')); // Removed 'err'
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Failed to load red goods')); // Removed 'err'
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {/* Display error message */}
      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
