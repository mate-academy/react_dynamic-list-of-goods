import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    getAll().then(allGoods => setGoods(allGoods));
  };

  const firstFiveGoods = async () => {
    get5First().then(fiveGoods => setGoods(fiveGoods));
  };

  const filterColorGoods = async () => {
    getRedGoods().then(goodsColor => setGoods(goodsColor));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoods}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={filterColorGoods}>
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
