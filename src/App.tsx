import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetAll = () => {
    getAll()
      .then(setGoods)
      .catch((explaination: Error) => {
        setErrorMessage(explaination.message);
      });
  };

  const handleGet5First = () => {
    get5First()
      .then(setGoods)
      .catch((explaination: Error) => {
        setErrorMessage(explaination.message);
      });
  };

  const handleGetRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch((explaination: Error) => {
        setErrorMessage(explaination.message);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      {!errorMessage ? <GoodsList goods={goods} /> : <h2>{errorMessage}</h2>}
    </div>
  );
};
