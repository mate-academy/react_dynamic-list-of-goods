import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { useState } from 'react';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setError('');
          goodsAPI
            .getAll()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setError('');
          goodsAPI
            .get5First()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setError('');
          goodsAPI
            .getRedGoods()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
