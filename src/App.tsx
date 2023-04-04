import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handlerAll = () => {
    getAll()
      .then(todosFromServer => {
        setGoods(todosFromServer);
      })
      .catch(() => {
        setGoods([]);
        setError('Loading goods was failed');
      });
  };

  const handler5First = () => {
    get5First()
      .then(todosFromServer => {
        setGoods(todosFromServer);
      })
      .catch(() => {
        setGoods([]);
        setError('Loading 5 first goods was failed');
      });
  };

  const handlerRed = () => {
    getRedGoods()
      .then(todosFromServer => {
        setGoods(todosFromServer);
      })
      .catch(() => {
        setGoods([]);
        setError('Loading red goods was failed');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlerAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handler5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      <strong>{error}</strong>
    </div>
  );
};
