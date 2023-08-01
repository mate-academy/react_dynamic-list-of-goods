import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = React.useState<Good[]>([]);

  const loadAll = React.useCallback(() => {
    getAll().then((goods) => {
      setAllGoods(goods);
    });
  }, []);

  const loadFiveGoods = React.useCallback(() => {
    get5First().then((goods) => {
      setAllGoods(goods);
    });
  }, []);

  const loadRedGoods = React.useCallback(() => {
    getRedGoods().then((goods) => {
      setAllGoods(goods);
    });
  }, []);

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
        onClick={loadFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
