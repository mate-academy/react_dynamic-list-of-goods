import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const allGoodsHandler = () => getAll()
    .then(goods => setGoodsList(goods));
  const firstFiveGoodsHandler = () => get5First()
    .then(goods => setGoodsList(goods));
  const onlyRedGoodsHandler = () => getRedGoods()
    .then(goods => setGoodsList(goods));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoodsHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onlyRedGoodsHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
