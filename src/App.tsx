import React, { useState } from 'react';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(result => {
      setGoods(result);
    });
  };

  const loadFirst5Goods = () => {
    get5First().then(result => {
      setGoods(result);
    });
  };

  const loadGetRed = () => {
    getRedGoods().then(result => {
      setGoods(result);
    });
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
        onClick={loadFirst5Goods}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={loadGetRed}>
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
