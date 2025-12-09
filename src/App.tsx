import React, { useCallback, useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [listOfGoods, setListOfGoods] = useState<Good[]>([]);
  const [error, setError] = useState(false);

  const handleClickAllGoods = useCallback(
    () =>
      getAll()
        .then(setListOfGoods)
        .catch(() => setError(true)),
    [],
  );
  const handleClick5FirstGoods = useCallback(
    () =>
      get5First()
        .then(setListOfGoods)
        .catch(() => setError(true)),
    [],
  );
  const handleRedGoods = useCallback(
    () =>
      getRedGoods()
        .then(setListOfGoods)
        .catch(() => setError(true)),
    [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClickAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {error ? (
        <p style={{ color: 'red' }}>`Error during downloading a list!!!`</p>
      ) : (
        <GoodsList goods={listOfGoods} />
      )}
    </div>
  );
};
