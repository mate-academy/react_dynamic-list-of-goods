import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods as getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

type GoodsFilter = 'all' | 'five' | 'red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [goodsFilter, setGoodsFilter] = useState<GoodsFilter>('all');

  useEffect(() => {
    let p: Promise<Good[]>;

    switch (goodsFilter) {
      case 'five':
        p = get5First();
        break;
      case 'red':
        p = getRed();
        break;
      case 'all':
      default:
        p = getAll();
    }

    p.then(setGoods);
  }, [goodsFilter]);

  const handleGoodsFilterChange = (filter: GoodsFilter) => () =>
    setGoodsFilter(filter);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleGoodsFilterChange('all')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={handleGoodsFilterChange('five')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handleGoodsFilterChange('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
