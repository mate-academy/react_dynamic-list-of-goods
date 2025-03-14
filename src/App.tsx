import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => setError('Failed to load all goods'));
  };

  const loadFive = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load 5 first goods'));
  };

  const loadRed = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => setError('Failed to load red goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error">{error}</p>}

      <button type="button" data-cy="all-button" onClick={() => loadAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFive()}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => loadRed()}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
