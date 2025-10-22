import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  function handleLoadAll() {
    getAll()
      .then(receivedGoods => {
        setGoods(receivedGoods);
        setError(null);
      })
      .catch(() => {
        setGoods([]);
        setError('Failed to load goods');
      });
  }

  function handleGet5First() {
    get5First()
      .then(receivedGoods => {
        setGoods(receivedGoods);
        setError(null);
      })
      .catch(() => {
        setGoods([]);
        setError('Failed to load goods');
      });
  }

  function handleGetRedGoods() {
    getRed()
      .then(receivedGoods => {
        setGoods(receivedGoods);
        setError(null);
      })
      .catch(() => {
        setGoods([]);
        setError('Failed to load goods');
      });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      {error && <p>{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
