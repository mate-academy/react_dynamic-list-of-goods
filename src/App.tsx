import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const prepareForLoading = () => {
    setErrorMessage(null);
    setGoods([]);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          prepareForLoading();
          getAll()
            .then(setGoods)
            .catch(() => setErrorMessage('Something went wrong...')); // Ловимо помилку тут
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          prepareForLoading();
          get5First()
            .then(setGoods)
            .catch(() => setErrorMessage('Something went wrong...')); // І тут
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          prepareForLoading();
          getRedGoods()
            .then(setGoods)
            .catch(() => setErrorMessage('Something went wrong...')); // І тут
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
