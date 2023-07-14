import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

enum FilterTypes {
  All = 'all',
  Get5First = 'first5',
  GetRed = 'red',
}

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  async function handleButton(option?: string) {
    switch (option) {
      case FilterTypes.Get5First: {
        try {
          const data = await get5First();

          setCurrentGoods(data);
        } catch {
          throw new Error('There was an error downloading data.');
        }

        break;
      }

      case FilterTypes.GetRed: {
        try {
          const data = await getRedGoods();

          setCurrentGoods(data);
        } catch {
          throw new Error('There was an error downloading data.');
        }

        break;
      }

      default: {
        try {
          const data = await getAll();

          setCurrentGoods(data);
        } catch {
          throw new Error('There was an error downloading data.');
        }
      }
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => (handleButton())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => (handleButton(FilterTypes.Get5First))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => (handleButton(FilterTypes.GetRed))}
      >
        Load red goods
      </button>

      <GoodsList goods={currentGoods} />
    </div>
  );
};
