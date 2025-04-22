import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    getAll().then(setGoods);
  };

  const handleLoad5First = async () => {
    get5First().then(setGoods);
  };

  const handleLoadRed = async () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={handleLoadAll} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={handleLoad5First}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={handleLoadRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
