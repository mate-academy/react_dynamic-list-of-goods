import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

const enum GoodFilter {
  All,
  First5,
  OnlyRed,
}

export const App: React.FC = () => {
  const [goodFilter, setGoodFilter] = useState(GoodFilter.All);
  const [goods, setGoods] = useState<Good[]>([]);
  const memoizedGoods = useMemo(() => {
    return goods;
  }, [goods]);

  const handleGoodFilterChanged = (filter: GoodFilter) => {
    if (filter !== goodFilter) {
      setGoodFilter(filter);
    }
  };

  useEffect(() => {
    switch (goodFilter) {
      case GoodFilter.First5:
        goodsAPI.get5First().then(setGoods);
        break;

      case GoodFilter.OnlyRed:
        goodsAPI.getRedGoods().then(setGoods);
        break;

      default:
        goodsAPI.getAll().then(setGoods);
        break;
    }
  }, [goodFilter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => {
          handleGoodFilterChanged(GoodFilter.All);
        }}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => {
          handleGoodFilterChanged(GoodFilter.First5);
        }}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => {
          handleGoodFilterChanged(GoodFilter.OnlyRed);
        }}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={memoizedGoods} />
    </div>
  );
};
