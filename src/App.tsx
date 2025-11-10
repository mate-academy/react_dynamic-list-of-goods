import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

/* eslint-disable no-console */
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = (): void => {
    goodsAPI
      .getAll()
      .then(data => setGoods(data))
      .catch(error => {
        console.error('failed to load all goods:', error);
        alert('Failed to load goods. Please try again.');
      });
  };

  const handleGet5First = (): void => {
    goodsAPI
      .get5First()
      .then(data => setGoods(data))
      .catch(error => {
        console.error('failed to load first 5 goods:', error);
        alert('Failed to load goods. Please try again.');
      });
  };

  const handleLoadRed = (): void => {
    goodsAPI
      .getRedGoods()
      .then(data => setGoods(data))
      .catch(error => {
        console.error('failed to load red goods:', error);
        alert('Failed to load goods. Please try again.');
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
        onClick={handleGet5First}
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
