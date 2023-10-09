/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll()
      .then(setPreparedGoods)
      .catch((error) => {
        console.error('Error loading all goods:', error);
      });
  };

  const handleLoad5FirstGoods = () => {
    get5First()
      .then(setPreparedGoods)
      .catch((error) => {
        console.error('Error loading 5 first goods:', error);
      });
  };

  const handleLoadRedGoods = () => {
    getRedGoods()
      .then((goods) => setPreparedGoods(goods))
      .catch((error) => {
        console.error('Error loading red goods:', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoods} />
    </div>
  );
};
