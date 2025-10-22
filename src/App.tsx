import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLoadAll = () => {
    setErrorMessage(null);
    getAll()
      .then(receivedGoods => setGoods(receivedGoods))
      .catch((error: Error) => {
        setErrorMessage(error.message);
      });
  };

  const handleLoadFirst5 = () => {
    setErrorMessage(null);
    get5First()
      .then(receivedGoods => setGoods(receivedGoods))
      .catch((error: Error) => {
        setErrorMessage(error.message);
      });
  };

  const handleLoadRed = () => {
    setErrorMessage(null);
    getRedGoods()
      .then(receivedGoods => setGoods(receivedGoods))
      .catch((error: Error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
