import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum SortBy {
  all = 'all',
  first5 = 'first5',
  redOnly = 'redOnly',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const buttonHandler = async (type: SortBy) => {
    try {
      if (type === SortBy.all) {
        setGoods(await getAll());
      }

      if (type === SortBy.first5) {
        setGoods(await get5First());
      }

      if (type === SortBy.redOnly) {
        setGoods(await getRedGoods());
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', e);

      return null;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => buttonHandler(SortBy.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => buttonHandler(SortBy.first5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => buttonHandler(SortBy.redOnly)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
