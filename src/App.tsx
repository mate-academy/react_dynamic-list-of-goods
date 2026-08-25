import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    setError(null);

    return getAll()
      .then(data => setGoods(data))
      .catch(() => {
        setError('Failed to load All goods');
      });
  };

  const handleLoadFive = () => {
    setError(null);

    return get5First()
      .then(data => setGoods(data))
      .catch(() => {
        setError('Failed to load 5 goods');
      });
  };

  const handleRedGoods = () => {
    setError(null);

    return getRedGoods()
      .then(data => setGoods(data))
      .catch(() => {
        setError('Failed to load Red goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
