import React, { useEffect, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

enum SortType {
  All,
  FirstFive,
  OnlyRed,
  NotSelected,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState<SortType>(SortType.NotSelected);

  const sortGoods = () => {
    switch (sortType) {
      case SortType.All:
        getAll().then(setGoods);
        break;
      case SortType.FirstFive:
        get5First().then(setGoods);
        break;
      case SortType.OnlyRed:
        getRedGoods().then(setGoods);
        break;
      default:
        setGoods([]);
    }
  };

  useEffect(() => {
    sortGoods();
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
        onClick={() => setSortType(SortType.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
