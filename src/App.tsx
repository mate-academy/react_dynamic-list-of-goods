import { FC, useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Filter, Good } from './types';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [filter, setFilter] = useState<Filter>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetAll = useCallback(() => {
    if (filter === 'All') {
      return;
    }

    setFilter('All');
    getAll()
      .then(setGoods)
      .catch(e => setError(e.message));
  }, [filter]);

  const handleGetFirst5 = useCallback(() => {
    if (filter === 'First5') {
      return;
    }

    setFilter('First5');
    get5First()
      .then(setGoods)
      .catch(e => setError(e.message));
  }, [filter]);

  const handleGetRed = useCallback(() => {
    if (filter === 'Red') {
      return;
    }

    setFilter('Red');
    getRedGoods()
      .then(setGoods)
      .catch(e => setError(e.message));
  }, [filter]);

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
      { goods && <GoodsList goods={goods} /> }
      { goods && !goods.length && <p>No goods to show.</p> }
      { error && <p>{error}</p> }
    </div>
  );
};
