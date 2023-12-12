import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum SortBy {
  InitialValue,
  All,
  FirstFive,
  RedGoods,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState(SortBy.InitialValue);

  useEffect(() => {
    switch (sortType) {
      case SortBy.All:
        getAll().then(setGoods);
        break;

      case SortBy.FirstFive:
        get5First().then(setGoods);
        break;

      case SortBy.RedGoods:
        getRedGoods().then(setGoods);
        break;

      default:
        break;
    }
  }, [sortType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortType(SortBy.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortType(SortBy.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortType(SortBy.RedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
