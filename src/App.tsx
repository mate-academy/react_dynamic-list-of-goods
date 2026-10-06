import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [filterBy, setFilterBy] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (filterBy === 'all') {
      getAll().then((res: Good[]) => setGoods(res));
    }

    if (filterBy === 'five') {
      get5First().then(res => setGoods(res));
    }

    if (filterBy === 'red') {
      getRedGoods().then(res => setGoods(res));
    }
  }, [filterBy]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setFilterBy('all')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setFilterBy('five')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setFilterBy('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
