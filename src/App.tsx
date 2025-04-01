import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGetAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load all goods');
      });
  };

  const handleGet5First = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load first five goods.');
      });
  };

  const handleGetRedGoods = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load red goods.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <div className="error">{error}</div>}

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
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

      <GoodsList goods={goods} />
    </div>
  );
};
