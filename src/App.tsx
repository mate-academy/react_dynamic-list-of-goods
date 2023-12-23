import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const FILTERS = {
  all: 'all',
  onlyRed: 'onlyRed',
  onlyFive: 'onlyFive',
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    switch (filter) {
      case FILTERS.onlyFive:
        get5First().then(setGoods);
        break;

      case FILTERS.onlyRed:
        getRedGoods().then(setGoods);
        break;

      default:
        getAll().then(setGoods);
        break;
    }
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter(FILTERS.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter(FILTERS.onlyFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter(FILTERS.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
