import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [load, setLoad] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (load === 'allgoods') {
      goodsAPI.getAll().then(setGoods);
    }

    if (load === 'firstgoods') {
      goodsAPI.get5First().then(setGoods);
    }

    if (load === 'red') {
      goodsAPI.getRedGoods().then(setGoods);
    }
  }, [load]);

  function allGoods() {
    setLoad('allgoods');
  }

  function firstGoods() {
    setLoad('firstgoods');
  }

  function redGoods() {
    setLoad('red');
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={firstGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
