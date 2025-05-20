import React, { useState } from 'react';

import './App.scss';

import { GoodsList } from './GoodsList';
import {
  getAll as requestAll,
  get5First as request5First,
  getRedGoods as requestRed,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsToList, setGoodsToList] = useState<Good[]>([]);

  function getAll(): void {
    requestAll().then(goods => setGoodsToList(goods));
  }

  function get5First(): void {
    request5First().then(goods => setGoodsToList(goods));
  }

  function getRedGoods(): void {
    requestRed().then(goods => setGoodsToList(goods));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsToList} />
    </div>
  );
};
