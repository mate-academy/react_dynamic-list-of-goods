import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [filteredGoods, setFilteredGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickByAllGoods = () => {
    getAll()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleClick5Goods = () => {
    get5First()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleClickByRedGoods = () => {
    getRedGoods()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleClickByAllGoods}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={handleClick5Goods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handleClickByRedGoods}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <GoodsList goods={filteredGoods} />
      )}
    </div>
  );
};
