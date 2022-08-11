import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [hasLoadingError, setLoadingError] = useState(false);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
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
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(goodsList => setGoods(goodsList))
            .catch(() => setLoadingError(true));
        }}
      >
        Load red goods
      </button>

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
