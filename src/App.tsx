import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

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
            .then(loadedGoods => setGoods(loadedGoods))
            .catch(() => {
              setError('Failed to load goods');
            });
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
            .then(loadedGoods => setGoods(loadedGoods))
            .catch(() => {
              setError('Failed to load first 5 goods');
            });
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
            .then(loadedGoods => setGoods(loadedGoods))
            .catch(() => setError('Failed to load red goods'));
        }}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
