import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getAll()
      .then(setGoods)
      .catch(() => setHasError(true));
  }, []);

  function loadAll() {
    setHasError(false);
    getAll()
      .then(setGoods)
      .catch(() => setHasError(true));
  }

  const loadFirstFive = () => {
    setHasError(false);
    get5First()
      .then(setGoods)
      .catch(() => setHasError(true));
  };

  const loadRed = () => {
    setHasError(false);
    getRed()
      .then(setGoods)
      .catch(() => setHasError(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {hasError && (
        <p data-cy="error-message" style={{ color: 'red' }}>
          Something went wrong!
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
