import React, { useEffect, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

enum SortType {
  All,
  FirstFive,
  RedGoods,
  Defolt = '',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState(SortType.Defolt);

  useEffect(() => {
    switch (sortType) {
      case SortType.All:
        getAll().then(setGoods);
        break;

      case SortType.FirstFive:
        get5First().then(setGoods);
        break;

      case SortType.RedGoods:
        getRedGoods().then(setGoods);
        break;

      default: break;
    }
  }, [sortType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortType(SortType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortType(SortType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortType(SortType.RedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
