import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

type FilterGoods = '' | 'all' | '5First' | 'red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterGoods, setFilterGoods] = useState<FilterGoods>('');

  useEffect(() => {
    if (filterGoods === 'all') {
      getAll().then(good => setGoods(good));
    }

    if (filterGoods === '5First') {
      get5First().then(good => setGoods(good));
    }

    if (filterGoods === 'red') {
      getRedGoods().then(good => setGoods(good));
    }
  }, [filterGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilterGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilterGoods('5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilterGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
