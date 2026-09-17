import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsListMemo } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  enum GoodSortType {
    Empty = 'empty',
    All = 'all',
    FirsFive = 'firsFive',
    RedColor = 'redColor',
  }

  const [sotedType, setSortedType] = useState<GoodSortType>(GoodSortType.Empty);
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    switch (sotedType) {
      case GoodSortType.Empty:
        setGoods([]);
        break;
      case GoodSortType.All:
        goodsAPI.getAll().then(newGoods => setGoods(newGoods));
        break;
      case GoodSortType.FirsFive:
        goodsAPI.get5First().then(newGoods => setGoods(newGoods));
        break;
      case GoodSortType.RedColor:
        goodsAPI.getRedGoods().then(newGoods => setGoods(newGoods));
        break;
    }
  }, [sotedType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortedType(GoodSortType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortedType(GoodSortType.FirsFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortedType(GoodSortType.RedColor)}
      >
        Load red goods
      </button>

      {goods.length > 0 && <GoodsListMemo goods={goods} />}
    </div>
  );
};
