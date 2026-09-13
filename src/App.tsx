import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from '../src/api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function handleLoadAll() {
    getAll()
      .then(data => setGoods(data))
      .catch(() => {});
  }

  function handleLoad5First() {
    get5First()
      .then(data => setGoods(data))
      .catch(() => {});
  }

  function handleLoadRed() {
    getRedGoods()
      .then(data => setGoods(data))
      .catch(() => {});
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleLoadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handleLoad5First}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handleLoadRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
