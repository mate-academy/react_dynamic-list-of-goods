import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum FilteredGoods {
  all = 'all',
  firs5Goods = 'firs5Goods',
  onlyRed = 'only red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState(():Good[] => []);

  const loadGoods = async (typeOfSort: string) => {
    switch (typeOfSort) {
      case FilteredGoods.all:
      default:
        return setGoods(await getAll());

      case FilteredGoods.firs5Goods:
        return setGoods(await get5First());

      case FilteredGoods.onlyRed:
        return setGoods(await getRedGoods());
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(FilteredGoods.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(FilteredGoods.firs5Goods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(FilteredGoods.onlyRed)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
