import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { DisplayGoods } from './types/DisplayGoods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [displayGoods, setDisplayGoods] = useState('');

  useEffect(() => {
    switch (displayGoods) {
      case DisplayGoods.All:
        getAll().then(setGoods);
        break;

      case DisplayGoods.FirstFive:
        get5First().then(setGoods);
        break;

      case DisplayGoods.OnlyRed:
        getRedGoods().then(setGoods);
        break;

      default:
        setDisplayGoods('');
    }
  }, [displayGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setDisplayGoods(DisplayGoods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setDisplayGoods(DisplayGoods.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setDisplayGoods(DisplayGoods.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
