import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(() => {
    getAll()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods');
      });
  }, []);

  const handleLoad5First = useCallback(() => {
    get5First()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load first 5 goods');
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    getRedGoods()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load red goods');
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

      <GoodsList goods={goods} />
    </div>
  );
};
