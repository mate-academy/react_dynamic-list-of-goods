import { FC, useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Filter, Good } from './types';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [filter, setFilter] = useState<Filter>(null);

  const handleGetAll = useCallback(() => {
    if (filter === 'All') {
      return;
    }

    setFilter('All');
    getAll().then(data => setGoods(data));
  }, [filter]);

  const handleGetFirst5 = useCallback(() => {
    if (filter === 'First5') {
      return;
    }

    setFilter('First5');
    get5First().then(data => setGoods(data));
  }, [filter]);

  const handleGetRed = useCallback(() => {
    if (filter === 'Red') {
      return;
    }

    setFilter('Red');
    getRedGoods().then(data => setGoods(data));
  }, [filter]);

  // eslint-disable-next-line no-console
  console.log('App render');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
