import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = async () => {
    try {
      setError(null);
      setGoods(await getAll());
    } catch {
      setError('Failed to load goods');
    }
  };

  const loadFirstFive = async () => {
    try {
      setError(null);
      setGoods(await get5First());
    } catch {
      setError('Failed to load goods');
    }
  };

  const loadRed = async () => {
    try {
      setError(null);
      setGoods(await getRed());
    } catch {
      setError('Failed to load goods');
    }
  };

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

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
