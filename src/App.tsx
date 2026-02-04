import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleLoadAllGoods() {
    setErrorMessage('');

    getAll()
      .then(setGoods)
      .catch(() => setErrorMessage('Oops, something went wrong!'));
  }

  function handleFiveFirst() {
    setErrorMessage('');

    get5First()
      .then(setGoods)
      .catch(() => setErrorMessage('Oops, something went wrong!'));
  }

  function handleRedGoods() {
    setErrorMessage('');

    getRedGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Oops, something went wrong!'));
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
        onClick={handleFiveFirst}
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
