import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

enum SortType {
  All = 'all',
  First5 = 'first-five',
  OnlyRed = 'only-red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState<SortType | null>(null);

  const handleClick = (sort: SortType) => {
    setSortType(sort);
  };

  useEffect(() => {
    if (sortType === SortType.All) {
      // eslint-disable-next-line no-console
      getAll().then(setGoods).catch(console.error);
    }

    if (sortType === SortType.First5) {
      // eslint-disable-next-line no-console
      get5First().then(setGoods).catch(console.error);
    }

    if (sortType === SortType.OnlyRed) {
      // eslint-disable-next-line no-console
      getRedGoods().then(setGoods).catch(console.error);
    }
  }, [sortType]);

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
        onClick={() => handleClick(SortType.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
