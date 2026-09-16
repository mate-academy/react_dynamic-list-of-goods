import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleAllGoods = () => {
    setError('');
    getAll()
      .then(setGoods)
      .catch(() => setError('Something went wrong'));
  };

  const handleFirstFive = () => {
    setError('');
    get5First()
      .then(setGoods)
      .catch(() => setError('Something went wrong'));
  };

  const handleRed = () => {
    setError('');
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Something went wrong'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
