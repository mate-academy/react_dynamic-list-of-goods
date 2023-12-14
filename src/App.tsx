import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import type { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleShowAll = () => getAll()
    .then(setGoods)
    .catch(error => setErrorMessage(error.message));

  const handleShowFirstFive = () => get5First()
    .then(setGoods)
    .catch(error => setErrorMessage(error.message));

  const handleShowRed = () => getRedGoods()
    .then(setGoods)
    .catch(error => setErrorMessage(error.message));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleShowAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleShowRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} errorMessage={errorMessage} />
    </div>
  );
};
