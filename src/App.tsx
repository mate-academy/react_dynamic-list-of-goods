import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allButtonHandler = () => {
    getAll().then(setGoods);
  };

  const firstFiveButtonHandler = () => {
    get5First().then(setGoods);
  };

  const redButtonHandler = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allButtonHandler}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveButtonHandler}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redButtonHandler}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
