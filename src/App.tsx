import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  const handleAll = () => {
    getAll().then(setGood);
  };

  const handleFive = () => {
    get5First().then(setGood);
  };

  const handleRed = () => {
    getRedGoods().then(setGood);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
