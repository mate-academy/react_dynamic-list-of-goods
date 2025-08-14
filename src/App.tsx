import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
//import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }, []);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoadFirst5 = () => {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
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

      {errorMessage && (
        <div className="error-message" data-cy="error-message">
          {errorMessage}
        </div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
