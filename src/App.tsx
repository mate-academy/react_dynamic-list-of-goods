import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [Goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
  };

  const handleLoadFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
  };

  const handleLoadRed = () => {
    getRed()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
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

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {Goods && <GoodsList goods={Goods} />}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
