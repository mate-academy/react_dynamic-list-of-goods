import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = useCallback(() => {
    getAll().then(setGoods);
  }, []);

  const load5Goods = useCallback(() => {
    get5First().then(setGoods);
  }, []);

  const loadRedGoods = useCallback(() => {
    getRedGoods().then(setGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={loadAllGoods}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={load5Goods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={loadRedGoods}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
