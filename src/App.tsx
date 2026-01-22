import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleLoadAll() {
    setErrorMessage('');
    getAll()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
  }

  function hadnleLoadFiveFirst() {
    setErrorMessage('');
    get5First()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
  }

  function handleRedGoods() {
    setErrorMessage('');
    getRedGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hadnleLoadFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p className="Error">{errorMessage}</p>}

      {!errorMessage && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
