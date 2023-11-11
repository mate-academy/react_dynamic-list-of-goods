import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(setGoods);
  };

  const getFirstFive = () => {
    get5First().then(setGoods);
  };

  const getRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
