import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAllGoogs = () => {
    getAll()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'));
  };

  const handleLoadRedGoods = () => {
    getRed()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'));
  };

  const handleLoad5First = () => {
    get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoogs}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {error ? <p>{error}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
