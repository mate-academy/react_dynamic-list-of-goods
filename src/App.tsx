import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const loadAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
      });
  };

  const loadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
      });
  };

  const loadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
      });
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

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
