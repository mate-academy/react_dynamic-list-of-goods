import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum SortType {
  None = '',
  All = 'all-button',
  FirstFive = 'first-five-buttons',
  Red = 'red-buttons',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<SortType>(SortType.None);

  const handleClick = useCallback((sortType: SortType) => {
    if (sort === sortType) {
      return;
    }

    switch (sortType) {
      case SortType.All:
        getAll()
          .then(setGoods);
        break;

      case SortType.FirstFive:
        get5First()
          .then(setGoods);
        break;

      case SortType.Red:
        getRedGoods()
          .then(setGoods);
        break;

      default:
        break;
    }

    setSort(sortType);
  }, [sort]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick(SortType.All);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(SortType.FirstFive)}
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

      <GoodsList goods={goods} />
    </div>
  );
};
