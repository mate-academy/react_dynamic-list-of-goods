import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(data => {
        setGoods(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error loading all goods', error);
        alert('Failed to load goods. Please try again later.');
      });
  };

  const handleLoadFive = () => {
    get5First()
      .then(data => {
        setGoods(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error loading 5 goods', error);
        alert('Failed to load first 5 goods.');
      });
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error loading red goods:', error);
        alert('Failed to load red goods.');
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
        onClick={handleLoadFive}
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
