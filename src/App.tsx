import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLoadAll = useCallback(() => {
    setErrorMessage('');
    getAll()
      .then(setGoods)
      .catch(error => {
        setErrorMessage('Failed to load all goods.');
        // eslint-disable-next-line no-console
        console.error('Error loading all goods:', error);
      });
  }, []);

  const handleLoad5First = useCallback(() => {
    setErrorMessage('');
    get5First()
      .then(setGoods)
      .catch(error => {
        setErrorMessage('Failed to load first 5 goods.');
        // eslint-disable-next-line no-console
        console.error('Error loading first 5 goods:', error);
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    setErrorMessage('');
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        setErrorMessage('Failed to load red goods.');
        // eslint-disable-next-line no-console
        console.error('Error loading red goods:', error);
      });
  }, []);

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

      {errorMessage && <p className="error">{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
