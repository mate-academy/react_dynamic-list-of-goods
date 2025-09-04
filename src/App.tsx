import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsViewMode, setGoodsViewMode] = useState<'all' | '5first' | 'red'>(
    'all',
  );

  useEffect(() => {
    const loader =
      goodsViewMode === 'all'
        ? getAll
        : goodsViewMode === '5first'
          ? get5First
          : getRedGoods;

    loader()
      .then(setGoods)
      .catch(() => setGoods([]));
  }, [goodsViewMode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsViewMode('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsViewMode('5first')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsViewMode('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
