import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum Sort {
  All = 'all-button',
  FirstFive = 'first-five-button',
  Red = 'red-button',
}

const getButtonName = (sortType: Sort) => {
  switch (sortType) {
    case Sort.All:
      return 'Load all goods';

    case Sort.FirstFive:
      return 'Load 5 first goods';

    case Sort.Red:
      return 'Load red goods';

    default:
      return '';
  }
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<Sort>();

  const getGoods = useCallback(async (promise: Promise<Good[]>) => {
    setGoods(await promise);
  }, []);

  const handleClick = useCallback((sortType: Sort) => {
    if (sort === sortType) {
      return;
    }

    switch (sortType) {
      case Sort.All:
        setSort(Sort.All);
        getGoods(getAll());
        break;

      case Sort.FirstFive:
        setSort(Sort.All);
        getGoods(get5First());
        break;

      case Sort.Red:
        setSort(Sort.Red);
        getGoods(getRedGoods());
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {Object.values(Sort).map(current => (
        <button
          type="button"
          data-cy={current}
          onClick={() => {
            handleClick(current);
          }}
        >
          {getButtonName(current)}
        </button>
      ))}

      <GoodsList goods={goods} />
    </div>
  );
};
