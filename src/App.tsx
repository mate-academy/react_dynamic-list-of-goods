import React, { useState, useEffect } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import './App.scss';

type Filter = 'all' | 'first5' | 'red' | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<Filter>(null);

  useEffect(() => {
    if (filter === 'all') {
      getAll().then(setGoods);
    } else if (filter === 'first5') {
      get5First().then(setGoods);
    } else if (filter === 'red') {
      getRedGoods().then(setGoods);
    }
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
