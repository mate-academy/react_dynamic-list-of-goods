import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllClick = () => {
    getAll().then(items => setGoods(items));
  };

  const handleFiveClick = () => {
    get5First().then(items => setGoods(items));
  };

  const handleRedClick = () => {
    getRedGoods().then(items => setGoods(items));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
