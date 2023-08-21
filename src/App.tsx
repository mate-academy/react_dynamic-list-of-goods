import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [filteredGoods, setFilteredGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllGoods = () => {
    getAll()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleFiveFirst = () => {
    get5First()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          className="button is-primary"
          onClick={handleAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button is-primary"
          onClick={handleFiveFirst}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button is-primary"
          onClick={handleRedGoods}
        >
          Load red goods
        </button>
      </div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <GoodsList goods={filteredGoods} />
      )}
    </div>
  );
};
