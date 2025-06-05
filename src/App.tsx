import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedGoodsFilter, setSelectedGoodsFilter] = useState<GoodsFilterChoice | null>(null);
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  enum GoodsFilterChoice {
    all = 'all',
    firstFive = 'first five',
    red = 'red',
  }

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);

      return;
    }

    if (selectedGoodsFilter === GoodsFilterChoice.all) {
      getAll().then(goods => {
        setGoodsFromServer(goods);
      });
    }

    if (selectedGoodsFilter === GoodsFilterChoice.firstFive) {
      get5First().then(goods => {
        setGoodsFromServer(goods);
      });
    }

    if (selectedGoodsFilter === GoodsFilterChoice.red) {
      getRedGoods().then(goods => {
        setGoodsFromServer(goods);
      });
    }
  }, [selectedGoodsFilter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSelectedGoodsFilter(GoodsFilterChoice.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSelectedGoodsFilter(GoodsFilterChoice.firstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSelectedGoodsFilter(GoodsFilterChoice.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
