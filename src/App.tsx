import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [hasLoadingError, setLoadingError] = useState(false);

  return (
    <div className="App container">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="button btn btn-outline-primary"
          data-cy="all-button"
          onClick={() => {
            getAll()
              .then(goodsList => setGoods(goodsList))
              .catch(() => setLoadingError(true));
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button btn btn-outline-primary"
          data-cy="first-five-button"
          onClick={() => {
            get5First()
              .then(goodsList => setGoods(goodsList))
              .catch(() => setLoadingError(true));
          }}
        >
          Load 5 first goods
        </button>

        <button
          className="button btn btn-outline-primary"
          type="button"
          data-cy="red-button"
          onClick={() => {
            getRed()
              .then(goodsList => setGoods(goodsList))
              .catch(() => setLoadingError(true));
          }}
        >
          Load red goods
        </button>
      </div>

      {!hasLoadingError
        ? (goods && <GoodsList goods={goods} />)
        : (
          <div>
            Something went wrong, try later
          </div>
        )}
    </div>
  );
};
