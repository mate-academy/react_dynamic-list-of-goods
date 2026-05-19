import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from '../src/types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [listOfGoods, setListOfGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(setListOfGoods);
  };

  const firstFiveGoods = () => {
    get5First().then(setListOfGoods);
  };

  const redGoods = () => {
    getRedGoods().then(setListOfGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={listOfGoods} />
    </div>
  );
};
