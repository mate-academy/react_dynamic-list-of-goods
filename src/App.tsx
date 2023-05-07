import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGetAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleGet5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const visibleGoods = useMemo(() => {
    return goods;
  }, [goods]);

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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
