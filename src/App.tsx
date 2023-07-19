import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum FetchingGoods {
  ALL, FIRST_FIVE, RED_ONLY,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [toFetch, setToFetch] = useState<FetchingGoods>(FetchingGoods.ALL);

  useEffect(() => {
    let dataPromise: Promise<Good[]>;

    switch (toFetch) {
      case FetchingGoods.FIRST_FIVE: {
        dataPromise = get5First();
        break;
      }

      case FetchingGoods.RED_ONLY: {
        dataPromise = getRedGoods();
        break;
      }

      default: {
        dataPromise = getAll();
        break;
      }
    }

    dataPromise.then(setGoods);
  }, [toFetch]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setToFetch(FetchingGoods.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setToFetch(FetchingGoods.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setToFetch(FetchingGoods.RED_ONLY)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
