import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleDownloadedGoods = (loadedGoods: Good[]): void => {
    setGoods(loadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(handleDownloadedGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(handleDownloadedGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(handleDownloadedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
