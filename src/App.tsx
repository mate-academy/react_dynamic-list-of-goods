import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => (
    getAll()
      .then(goodsFromServer => (setGoods(goodsFromServer))));

  const loadFirstFive = () => (
    get5First()
      .then(goodsFromServer => (setGoods(goodsFromServer))));

  const loadOnlyRed = () => (
    getRedGoods()
      .then(goodsFromServer => (setGoods(goodsFromServer))));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadOnlyRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
