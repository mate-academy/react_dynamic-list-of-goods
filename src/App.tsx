import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsLoadingOption, setGoodsLoadingOption] = useState<string | null>(
    null,
  );
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (goodsLoadingOption === 'all') {
      getAll().then(setGoods);
    }

    if (goodsLoadingOption === 'firstFive') {
      get5First().then(setGoods);
    }

    if (goodsLoadingOption === 'redOnes') {
      getRedGoods().then(setGoods);
    }
  }, [goodsLoadingOption]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsLoadingOption('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsLoadingOption('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsLoadingOption('redOnes')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
