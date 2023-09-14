import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

enum GoodsFilter {
  All = 'all',
  FiveFirst = 'five-first',
  Red = 'red',
}

export const App: React.FC = () => {
  const [filter, setFilter] = useState<GoodsFilter>(GoodsFilter.All);
  const [filteredGoods, setFilteredGoods] = useState<Good[]>([]);

  useEffect(() => {
    let promise;

    switch (filter) {
      case GoodsFilter.FiveFirst:
        promise = get5First();
        break;

      case GoodsFilter.Red:
        promise = getRedGoods();
        break;

      default:
        promise = getAll();
    }

    promise.then((response) => setFilteredGoods(response));
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter(GoodsFilter.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter(GoodsFilter.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter(GoodsFilter.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={filteredGoods} />
    </div>
  );
};
