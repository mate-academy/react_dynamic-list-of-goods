import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

type FilterType = 'all' | 'firstfive' | 'red' | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterType, setFilterType] = useState<FilterType>(null);

  useEffect(() => {
    if (filterType === 'all') {
      getAll().then(allGoods => {
        setGoods(allGoods);
      });
    } else if (filterType === 'red') {
      getRed().then(redGoods => {
        setGoods(redGoods);
      });
    } else if (filterType === 'firstfive') {
      get5First().then(allGoods => {
        setGoods(allGoods);
      });
    }
  }, [filterType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilterType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilterType('firstfive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilterType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
