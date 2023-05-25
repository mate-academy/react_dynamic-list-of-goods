import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllGoods = useCallback(() => {
    return getAll()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const load5FirstGoods = useCallback(() => {
    return get5First()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const loadOnlyRedGoods = useCallback(() => {
    return getRedGoods()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadOnlyRedGoods}
      >
        Load red goods
      </button>
      {errorMessage
        ? <p>{errorMessage}</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
