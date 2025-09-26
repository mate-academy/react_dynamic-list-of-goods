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

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(goodsAll => {
              setGoods(goodsAll);
            })
            .catch(err => setError(err.message));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(goods5First => {
              setGoods(goods5First);
            })
            .catch(err => setError(err.message));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(goodsRed => setGoods(goodsRed))
            .catch(err => setError(err.message));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {error && <p className="notification is-danger">{error}</p>}
    </div>
  );
};
