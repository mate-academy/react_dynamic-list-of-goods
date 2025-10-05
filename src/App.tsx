import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function goodsAll() {
    return getAll()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Error when receiving goods'));
  }

  function goodsAll5First() {
    return get5First()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Error when receiving goods'));
  }

  function goodsAllRed() {
    return getRedGoods()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Error when receiving goods'));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={goodsAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={goodsAll5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={goodsAllRed}>
        Load red goods
      </button>

      {errorMessage ? (
        <div className="error">{errorMessage}</div>
      ) : (
        <GoodsList goods={goodsList} />
      )}
    </div>
  );
};
