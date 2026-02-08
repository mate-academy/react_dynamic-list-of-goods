import React, { useState } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleLoadAllGoods() {
    setErrorMessage('');

    getAll()
      .then(setGoods)
      .catch(() => setErrorMessage('Something went wrong!'));
  }

  function handleFiveOfFirst() {
    setErrorMessage('');

    get5First()
      .then(setGoods)
      .catch(() => setErrorMessage('Something went wrong!'));
  }

  function handleOnlyRed() {
    setErrorMessage('');

    getRedGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Something went wrong!'));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveOfFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleOnlyRed}>
        Load red goods
      </button>

      {errorMessage && <p className="Error">{errorMessage}</p>}

      {!errorMessage && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
