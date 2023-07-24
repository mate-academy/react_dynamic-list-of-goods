import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum Filters {
  All = 'all',
  FiveFirst = 'fiveFirst',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const handleClick = (filter: Filters) => {
    switch (filter) {
      case Filters.All:
      default:
        getAll().then(setGoods);
        break;
      case Filters.FiveFirst:
        get5First().then(setGoods);
        break;
      case Filters.Red:
        getRedGoods().then(setGoods);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(Filters.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(Filters.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(Filters.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
