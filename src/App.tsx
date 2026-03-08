import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState(false);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const handleLoad5 = () => {
    get5First()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const handleReset = () => {
    setError(false);
    handleLoadAll();
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleLoad5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {!error ? (
        <GoodsList goods={goods} />
      ) : (
        <span>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </span>
      )}
    </div>
  );
};
