import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setError(false);
          getAll()
            .then(setGoods)
            .catch(() => setError(true));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setError(false);
          get5First()
            .then(setGoods)
            .catch(() => setError(true));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setError(false);
          getRedGoods()
            .then(setGoods)
            .catch(() => setError(true));
        }}
      >
        Load red goods
      </button>

      {error && <p>Something went wrong</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
