import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const FILTERS = {
  all: 'all',
  onlyRed: 'onlyRed',
  onlyFive: 'onlyFive',
} as const;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<keyof typeof FILTERS | null>(null);
  const [updatedAt, setUpdatedAt] = useState(new Date());

  useEffect((): void => {
    switch (filter) {
      case FILTERS.onlyFive:
        get5First().then(setGoods);
        break;

      case FILTERS.onlyRed:
        getRedGoods().then(setGoods);
        break;

      case FILTERS.all:
        getAll().then(setGoods);
        break;

      default:
        break;
    }
  }, [filter, updatedAt]);

  const handleNewFetch = (newFilter: keyof typeof FILTERS) => {
    setFilter(newFilter);
    setUpdatedAt(new Date());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleNewFetch(FILTERS.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleNewFetch(FILTERS.onlyFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleNewFetch(FILTERS.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
