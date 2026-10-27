import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadAll = () => {
    setErrorMessage('');

    getAll()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(() => {
        setErrorMessage('Unable to load goods. Please try again');
      });
  };

  const handleLoad5First = () => {
    setErrorMessage('');

    get5First()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(() => {
        setErrorMessage('Unable to load goods. Please try again');
      });
  };

  const handleLoadRed = () => {
    setErrorMessage('');

    getRed()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(() => {
        setErrorMessage('Unable to load goods. Pleasy try again');
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
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {errorMessage && <p role="alert">{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
