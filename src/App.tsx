import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(allGoods => setGoods(allGoods))
            .catch(e => setErrorMessage(e));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(allGoods => setGoods(allGoods))
            .catch(e => setErrorMessage(e));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(allGoods => setGoods(allGoods))
            .catch(e => setErrorMessage(e));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {errorMessage && goods.length === 0 && (
        <p className="title is-5">{errorMessage}</p>
      )}
    </div>
  );
};
