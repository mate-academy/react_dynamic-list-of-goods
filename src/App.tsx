import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

//
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, GetVisibleGoods] = useState<Good[]>([]);

  const getOllGoods = () => {
    getAll().then((goods) => GetVisibleGoods(goods));
  };

  const getFirst5 = () => {
    get5First().then((goods) => GetVisibleGoods(goods));
  };

  const getOnlyRed = () => {
    getRedGoods().then((goods) => GetVisibleGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getOllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFirst5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
