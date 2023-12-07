import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, GetVisibleGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then((goods) => GetVisibleGoods(goods));
  };

  const getFirstFive = () => {
    get5First().then((goods) => GetVisibleGoods(goods));
  };

  const getRed = () => {
    getRedGoods().then((goods) => GetVisibleGoods(goods));
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

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
