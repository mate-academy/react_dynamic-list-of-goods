import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const allTodos = useCallback(() => {
    getAll()
      .then(goodList => setGoods(goodList))
      .catch(() => setHasLoadingError(true));
  }, []);

  const fiveFirsTodos = useCallback(() => {
    get5First()
      .then(goodList => setGoods(goodList))
      .catch(() => setHasLoadingError(true));
  }, []);

  const redGoods = useCallback(() => {
    getRedGoods()
      .then(goodList => setGoods(goodList))
      .catch(() => setHasLoadingError(true));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allTodos}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fiveFirsTodos}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={redGoods}
      >
        Load red goods
      </button>

      {!hasLoadingError
        ? (goods && <GoodsList goods={goods} />)
        : (
          <div className="message-error">
            Something went wrong, please try again later
          </div>
        )}
    </div>
  );
};
