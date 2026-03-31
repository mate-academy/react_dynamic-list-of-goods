import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleAllGoodList = () =>
    goodsAPI
      .getAll()
      .then(setGoodsList)
      .finally(setErrorMessage(null))
      .catch(err => setErrorMessage(err.message || 'Something went wrong'));

  const handleFirstFiveGoodList = () =>
    goodsAPI
      .get5First()
      .then(setGoodsList)
      .catch(err => setErrorMessage(err.message || 'Something went wrong'));

  const handleRedGoodList = () =>
    goodsAPI
      .getRedGoods()
      .then(setGoodsList)
      .catch(err => setErrorMessage(err.message || 'Something went wrong'));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoodList}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoodList}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoodList}>
        Load red goods
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <GoodsList goods={goodsList} />
    </div>
  );
};
