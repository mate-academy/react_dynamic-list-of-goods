import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll } from './api/goods';
import { get5First } from './api/goods';
import { getRedGoods } from './api/goods';
import { Good } from './types/Good';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => {
        setGoods([]);
      });
  };

  const loadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const loadRedOnes = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button onClick={loadFirstFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRedOnes} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
