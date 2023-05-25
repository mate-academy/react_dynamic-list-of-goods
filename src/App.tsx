import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum GoodFilter {
  all = 'all',
  firs5 = 'firs5',
  red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState(():Good[] => []);

  const loadGoods = async (typeOfSort: string) => {
    switch (typeOfSort) {
      case GoodFilter.all:
      default:
        return setGoods(await getAll());

      case GoodFilter.firs5:
        return setGoods(await get5First());

      case GoodFilter.red:
        return setGoods(await getRedGoods());
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(GoodFilter.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(GoodFilter.firs5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(GoodFilter.red)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
