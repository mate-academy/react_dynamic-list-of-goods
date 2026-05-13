import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLoadAll = () => {
    setErrorMessage('');

    getAll()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setErrorMessage('Failed to load products');
      });
  };

  const handleLoad5First = () => {
    setErrorMessage('');

    get5First()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setErrorMessage('Failed to load the first 5 items');
      });
  };

  const handleLoadRed = () => {
    setErrorMessage('');

    getRedGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setErrorMessage('Failed to load red items');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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

      <GoodsList goods={goods} />
    </div>
  );
};
