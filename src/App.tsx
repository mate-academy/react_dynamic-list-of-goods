import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => {
        setErrorMessage(`'Failed to load all goods:', ${error}`);
      });
  };

  const show5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => {
        setErrorMessage(`'Failed to load 5 first goods:', ${error}`);
      });
  };

  const showRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        setErrorMessage(`'Failed to load red goods:', ${error}`);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
