import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const loadAllGoods = useCallback(() => {
    getAll().then(setGoods);
  }, []);

  const loadFiveGoods = useCallback(() => {
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
        onClick={loadFiveGoods}
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
