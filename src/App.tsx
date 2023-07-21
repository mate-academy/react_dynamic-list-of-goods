import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum FetchingGoods {
  DEFAULT, ALL, FIRST_FIVE, RED_ONLY,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleOnFetch = (fetchingQuery: FetchingGoods) => {
    let dataPromise: Promise<Good[]>;

    switch (fetchingQuery) {
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

    dataPromise
      .then(setGoods)
      .catch(() => {
        setGoods([]);
        throw new Error('Data is not valid');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleOnFetch(FetchingGoods.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleOnFetch(FetchingGoods.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleOnFetch(FetchingGoods.RED_ONLY)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
