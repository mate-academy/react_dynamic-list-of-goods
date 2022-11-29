import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = useCallback(() => {
    getAll().then((data) => {
      setGoods(data);
    });
  },
  [goods]);

  const loadFirst5Goods = useCallback(() => {
    get5First().then((data) => {
      setGoods(data);
    });
  },
  [goods]);

  const loadRedGoods = useCallback(() => {
    getRedGoods().then((data) => {
      setGoods(data);
    });
  },
  [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirst5Goods}
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

      <GoodsList goods={goods} />
    </div>
  );
};
