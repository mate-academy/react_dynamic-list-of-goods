import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(data => {
              setGoods(data);
              setErrorMessage('');
            })
            .catch(error => setErrorMessage(error.message));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(data => {
              setGoods(data);
              setErrorMessage('');
            })
            .catch(error => setErrorMessage(error));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRed()
            .then(data => {
              setGoods(data);
              setErrorMessage('');
            })
            .catch(error => setErrorMessage(error));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
