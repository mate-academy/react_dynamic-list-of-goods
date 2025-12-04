import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(() => {
    getAll()
      .then(setGoods)
      .catch(error => {
        console.error('Failed to load goods:', error);
        setGoods([]);
      });
  }, []);

  const handleLoad5First = useCallback(() => {
    get5First()
      .then(setGoods)
      .catch(error => {
        console.error('Failed to load first 5 goods:', error);
        setGoods([]);
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        console.error('Failed to load red goods:', error);
        setGoods([]);
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
