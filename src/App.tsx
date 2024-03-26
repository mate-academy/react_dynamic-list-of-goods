import React, { useEffect, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

enum FilterQuery {
  'all',
  'first5',
  'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<FilterQuery | null>(
    null,
  );

  useEffect(() => {
    if (selectedFilter === FilterQuery.all) {
      getAll().then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
    }

    if (selectedFilter === FilterQuery.first5) {
      get5First().then(filteredGoods => {
        setGoods(filteredGoods);
      });
    }

    if (selectedFilter === FilterQuery.red) {
      getRedGoods().then(filteredGoods => {
        setGoods(filteredGoods);
      });
    }
  }, [selectedFilter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setSelectedFilter(FilterQuery.all);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setSelectedFilter(FilterQuery.first5);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setSelectedFilter(FilterQuery.red);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
