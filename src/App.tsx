import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(setGoods)
            .catch(() => {
              setError('Something went wrong');
            });
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(setGoods)
            .catch(() => {
              setError('Something went wrong');
            });
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(setGoods)
            .catch(() => {
              setError('Something went wrong');
            });
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
