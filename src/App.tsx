import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good, SortType } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  function handleClick(button: string) {
    switch (button) {
      case SortType.All:
        getAll().then(allGoods => setVisibleGoods(allGoods));
        break;
      case SortType.First5:
        get5First().then(first5Goods => setVisibleGoods(first5Goods));
        break;
      case SortType.Red:
        getRedGoods().then(redGoods => setVisibleGoods(redGoods));
        break;
      default:
        setVisibleGoods([]);
        break;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(SortType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(SortType.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(SortType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
