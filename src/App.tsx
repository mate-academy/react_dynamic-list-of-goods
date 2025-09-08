import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAllGoods = () => {
    setError(null);
    getAll()
      .then(setVisibleGoods)
      .catch(err => {
        setError(err.message);
        setVisibleGoods([]);
      });
  };

  const handle5First = () => {
    setError(null);
    get5First()
      .then(setVisibleGoods)
      .catch(err => {
        setError(err.message);
        setVisibleGoods([]);
      });
  };

  const handleRed = () => {
    setError(null);
    getRedGoods()
      .then(setVisibleGoods)
      .catch(err => {
        setError(err.message);
        setVisibleGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {error && <p className="error-message">Error: {error}</p>}

      <button onClick={handleAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={handle5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={handleRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      {!error && <GoodsList goods={visibleGoods} />}
    </div>
  );
};
