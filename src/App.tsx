import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  function hundGetAll() {
    getAll().then(goods => {
      setAllGoods(goods);
    });
  }

  function hundleGet5First() {
    get5First().then(goods => {
      setAllGoods(
        goods.sort((a, c) => a.name.localeCompare(c.name)).slice(0, 5),
      );
    });
  }

  function hundleGetRedGoods() {
    getRedGoods().then(goods => {
      setAllGoods(goods.filter(good => good.color === 'red'));
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => hundGetAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => hundleGet5First()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => hundleGetRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
