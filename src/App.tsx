import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    return getAll().then(setGoods);
  };

  const get5FirstGoods = () => {
    return get5First().then(setGoods);
  };

  const getRedGoods = () => {
    return getRed().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button">
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={[]} />
    </div>
  );
};
