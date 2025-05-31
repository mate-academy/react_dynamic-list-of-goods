import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

import React, { useState } from 'react';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function loadAllGoods() {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  function loadFiveFirstGoods() {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  function loadRedGoods() {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
