import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = async () => {
    try {
      setGoods(await getAll());
      setError(null);
    } catch (err) {
      setGoods([]);
      setError('Failed to load goods');
    }
  };

  const load5First = async () => {
    try {
      setGoods(await get5First());
      setError(null);
    } catch (err) {
      setGoods([]);
      setError('Failed to load goods');
    }
  };

  const loadRed = async () => {
    try {
      setGoods(await getRedGoods());
      setError(null);
    } catch (err) {
      setGoods([]);
      setError('Failed to load goods');
    }
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

      {error && <p className="error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
