import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  function handleLoadAll() {
    getAll()
      .then(allGoods => {
        setGoods(allGoods);
        setError(null);
      })

      .catch(() => {
        setError('Failed to load all goods.');
      });
  }

  function handleLoadFirstFive() {
    get5First()
      .then(firstFive => {
        setGoods(firstFive);
        setError(null);
      })

      .catch(() => {
        setError('Failed to load goods.');
      });
  }

  function handleLoadRed() {
    getRedGoods()
      .then(goodsRed => {
        setGoods(goodsRed);
        setError(null);
      })

      .catch(() => {
        setError('Failed to load red goods.');
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
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
