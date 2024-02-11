import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const LoadAll = () => {
    getAll().then(setGoods);
  };

  const Load5First = () => {
    get5First().then(setGoods);
  };

  const LoadRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={LoadAll}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={Load5First}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={LoadRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
