import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(goods => {
              setAllGoods(goods);
            })
            .catch(() => setHasError(true));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(goods => {
              setAllGoods(goods);
            })
            .catch(() => setHasError(true));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(goods => {
              setAllGoods(goods);
            })
            .catch(() => setHasError(true));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
      {hasError && <p className="has-text-danger">Something went wrong</p>}
    </div>
  );
};
