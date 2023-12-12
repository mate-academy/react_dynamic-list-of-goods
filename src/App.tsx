import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => getAll().then(setGoods);
  const handleGetFirst5 = () => get5First().then(setGoods);
  const handleGetRed = () => getRedGoods().then(setGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
