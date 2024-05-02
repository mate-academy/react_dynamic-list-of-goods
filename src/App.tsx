import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    getAll().then(setGoods);
  };

  const handleGet5First = () => {
    get5First().then(setGoods);
  };

  const handleGetRed = () => {
    getRedGoods().then(setGoods);
  };

  useEffect(() => {}, [goods]);

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>
      <div className="container">
        <button
          type="button"
          data-cy="all-button"
          className="App__button blue"
          onClick={handleGetAll}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="App__button green"
          onClick={handleGet5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="App__button red"
          onClick={handleGetRed}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
