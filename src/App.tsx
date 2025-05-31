import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);

  function handleGetAll() {
    getAll().then(goods => {
      setGoodList(goods);
    });
  }

  function handleGet5First() {
    get5First().then(goods => {
      setGoodList(goods);
    });
  }

  function handleGetRed() {
    getRedGoods().then(goods => {
      setGoodList(goods);
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};
