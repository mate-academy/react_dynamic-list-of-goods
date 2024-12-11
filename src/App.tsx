import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line
        console.log('Error loading all goods', error);
      });
  };

  const handleLoad5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line
        console.log('Error loading first 5 goods', error);
      });
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line
        console.log('Error loading red goods', error);
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

      <GoodsList goods={goods} />
    </div>
  );
};
