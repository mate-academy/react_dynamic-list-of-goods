import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const LoadAllGoods = () => {
    getAll().then(allGoods => setGoods(allGoods));
  }

  const Load5First = () => {
    get5First().then(first5Goods => setGoods(first5Goods));
  }

  const LoadRedGoods = () => {
    getRed().then(redGoods => setGoods(redGoods));
  }

  return (
    <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button
      type="button"
      data-cy="all-button"
      onClick={LoadAllGoods}
    >
      Load all goods
    </button>

    <button
      type="button"
      data-cy="first-five-button"
      onClick={Load5First}
    >
      Load 5 first goods
    </button>

    <button
      type="button"
      data-cy="red-button"
      onClick={LoadRedGoods}
    >
      Load red goods
    </button>

    <GoodsList goods={goods} />
  </div>
  );
};
