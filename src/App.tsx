import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const displayAllGoods = useCallback(
    () => {
      getAll()
        .then((fetchedGoods) => (setAllGoods(fetchedGoods)));
    },
    [],
  );

  const displayFirstFiveGoods = useCallback(
    () => {
      get5First()
        .then((fetchedGoods) => (setAllGoods(fetchedGoods)));
    },
    [],
  );

  const displayRedGoods = useCallback(
    () => {
      getRed()
        .then((fetchedGoods) => (setAllGoods(fetchedGoods)));
    },
    [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={displayAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={displayFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={displayRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
