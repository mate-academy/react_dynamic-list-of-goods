import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState(false);

  const fetchAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const fetchFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const fetchRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setError(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={fetchAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetchFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={fetchRed}
      >
        Load red goods
      </button>
      {
        error
          ? <p>error</p>
          : <GoodsList goods={goods} />
      }

    </div>
  );
};
