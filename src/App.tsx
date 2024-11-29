import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>();

  function getAllGoods() {
    getAll().then((goodsFormServer: Good[]) => {
      setGoods(goodsFormServer);
    });
  }

  function getFiveGoods() {
    get5First().then((goodsFormServer: Good[]) => {
      setGoods(goodsFormServer);
    });
  }

  function getRedGood() {
    getRedGoods().then((goodsFormServer: Good[]) => {
      setGoods(goodsFormServer);
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGood}>
        Load red goods
      </button>

      <GoodsList goods={goods || []} />
    </div>
  );
};
