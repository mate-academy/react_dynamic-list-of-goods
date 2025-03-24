import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAllGoods = () => {
    setError(null);
    getAll()
      .then(allGoods => setGoods(allGoods))
      .catch(() => setError('Failed. Please try later.'));
  };

  const handleLoadFirst5 = () => {
    setError(null);
    get5First()
      .then(firstFiveGoods => setGoods(firstFiveGoods))
      .catch(() => setError('Failed. Please try later.'));
  };

  const handleLoadColorRed = () => {
    setError(null);
    getRedGoods()
      .then(redGoods => setGoods(redGoods))
      .catch(() => setError('Failed. Please try later.'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error-message">{error}</p>}

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadColorRed}>
        Load red goods
      </button>

      {!error && <GoodsList goods={goods} />}
    </div>
  );
};
