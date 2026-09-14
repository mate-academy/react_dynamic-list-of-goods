import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = async (getGoods: () => Promise<Good[]>) => {
    setError('');

    try {
      const loadedGoods = await getGoods();

      setGoods(loadedGoods);
    } catch {
      setGoods([]);
      setError('Failed to load goods');
    }
  };

  const loadAll = () => {
    loadGoods(getAll);
  };

  const load5First = () => {
    loadGoods(get5First);
  };

  const loadRed = () => {
    loadGoods(getRed);
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

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
