import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleError = (error: Error) => {
    // eslint-disable-next-line no-console
    console.error(error.message);
  };

  const loadAll = useCallback(() => {
    getAll()
      .then(allGoods => {
        setGoods(allGoods);
      })
      .catch(handleError);
  }, []);

  const load5First = useCallback(() => {
    get5First()
      .then(fiveFirstGoods => {
        setGoods(fiveFirstGoods);
      })
      .catch(handleError);
  }, []);

  const loadRedGoods = useCallback(() => {
    getRedGoods()
      .then(redGoods => {
        setGoods(redGoods);
      })
      .catch(handleError);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
