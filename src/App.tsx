import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleAll = () => {
    getAll().then(data => setGoodsList(data));
  };

  const handleFirstFive = () => {
    get5First().then(data => setGoodsList(data));
  };

  const handleRed = () => {
    getRedGoods().then(data => setGoodsList(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
