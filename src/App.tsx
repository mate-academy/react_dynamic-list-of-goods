import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const displayAllGoods = useCallback(
    () => {
      getAll()
        .then((fetchedGoods) => (setGoods(fetchedGoods)));
    },
    [],
  );

  const displayFirstFiveGoods = useCallback(
    () => {
      get5First()
        .then((fetchedGoods) => (setGoods(fetchedGoods)));
    },
    [],
  );

  const displayRedGoods = useCallback(
    () => {
      getRed()
        .then((fetchedGoods) => (setGoods(fetchedGoods)));
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

      <GoodsList goods={goods} />
    </div>
  );
};
