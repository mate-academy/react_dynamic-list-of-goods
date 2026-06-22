import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const [errorLoad, setErrorLoad] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setErrorLoad(null);

          getAll()
            .then(data => setSelectedGoods(data))
            .catch(() => {
              setErrorLoad('Failed to load goods. Please try again.');
            });
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setErrorLoad(null);
          get5First()
            .then(data => setSelectedGoods(data))
            .catch(() => {
              setErrorLoad(
                'Failed to load first-five goods. Please try again.',
              );
            });
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setErrorLoad(null);
          getRedGoods()
            .then(data => setSelectedGoods(data))
            .catch(() => {
              setErrorLoad('Failed to load red goods. Please try again.');
            });
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />

      {errorLoad && <p className="error">{errorLoad}</p>}
    </div>
  );
};
