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
      .catch(() => setError('Failed to load goods'));
  };

  const loadFiveGoods = () => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load first 5 goods'));
  };

  const loadRedGoods = () => {
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Failed to load red goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods} data-cy="all-button">
        Load all goods
      </button>
      <button type="button" onClick={loadFiveGoods} data-cy="first-five-button">
        Load 5 first goods
      </button>
      <button type="button" onClick={loadRedGoods} data-cy="red-button">
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
