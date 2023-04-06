import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum Sort {
  None = '',
  All = 'all-button',
  FirstFive = 'first-five-buttons',
  Red = 'red-buttons',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<Sort>(Sort.None);

  const handleClick = useCallback((sortType: Sort) => {
    if (sort === sortType) {
      return;
    }

    switch (sortType) {
      case Sort.All:
        getAll()
          .then(setGoods);
        break;

      case Sort.FirstFive:
        get5First()
          .then(setGoods);
        break;

      case Sort.Red:
        getRedGoods()
          .then(setGoods);
        break;

      default:
        break;
    }

    setSort(sortType);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick(Sort.All);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(Sort.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(Sort.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

// function fiveGoodsHandler() {
//   throw new Error('Function not implemented.');
// }
