import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(goods => {
      if (!goods) {
        throw new Error('There is not goods');
      }

      setAllGoods(goods);
    });
  };

  const handleLoad5First = () => {
    get5First().then(goods => {
      if (!goods) {
        throw new Error('There is not 5 goods at least');
      }

      setAllGoods(goods);
    });
  };

  const handleLoadRed = () => {
    getRedGoods().then(goods => {
      if (!goods) {
        throw new Error('There is not red goods');
      }

      setAllGoods(goods);
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

      <GoodsList goods={allGoods} />
    </div>
  );
};
