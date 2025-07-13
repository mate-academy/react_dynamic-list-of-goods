import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

enum FilterVariable {
  all = 'all',
  first_5 = 'frst5',
  onlyRed = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    switch (filter) {
      case FilterVariable.all:
        getAll().then(setGoods);
        break;
      case FilterVariable.first_5:
        get5First().then(setGoods);
        break;
      case FilterVariable.onlyRed:
        getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter(FilterVariable.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter(FilterVariable.first_5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter(FilterVariable.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
