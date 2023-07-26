import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum GoodsFilters {
  ALL = 'all',
  FIVE = 'five',
  RED = 'red',
  NOTHING = '',
}

function getVisibleGoods(good: GoodsFilters): Promise<Good[]> | null {
  switch (good) {
    case GoodsFilters.ALL:
      return getAll();

    case GoodsFilters.FIVE:
      return get5First();

    case GoodsFilters.RED:
      return getRedGoods();

    default:
      return null;
  }
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleGoods, setVisibleGoods] = useState(GoodsFilters.NOTHING);

  useEffect(() => {
    getVisibleGoods(visibleGoods)?.then(setGoods);
  }, [visibleGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setVisibleGoods(GoodsFilters.ALL);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setVisibleGoods(GoodsFilters.FIVE);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setVisibleGoods(GoodsFilters.RED);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
