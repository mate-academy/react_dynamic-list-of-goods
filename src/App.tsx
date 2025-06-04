import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [filteredGoods, setFilteredGoods] = useState<Good[]>([]);

  const hadnleLoadAll = () => {
    getAll()
      .then(goods => {
        setFilteredGoods(goods);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods:', error);
      });
  };

  const hadnleLoadFive = () => {
    get5First()
      .then(goods => {
        setFilteredGoods(goods);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load first 5 goods:', error);
      });
  };

  const hadnleLoadRed = () => {
    getRedGoods()
      .then(goods => {
        setFilteredGoods(goods);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load first red goods:', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={hadnleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hadnleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={hadnleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={filteredGoods} />
    </div>
  );
};
