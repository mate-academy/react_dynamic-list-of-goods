import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  function handleGetAll() {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  function handleGetFiveFirst() {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  function handleGetRedGoods() {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => handleGetAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetFiveFirst()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} errorMessage={errorMessage} />
    </div>
  );
};
