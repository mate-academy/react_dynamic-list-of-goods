import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleGoods = async (callback: () => Promise<Good[]>) => {
    try {
      const visibleGoods = await callback();

      setGoods(visibleGoods);
    } catch {
      setHasError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleGoods(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleGoods(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleGoods(getRedGoods);
        }}
      >
        Load red goods
      </button>

      {hasError
        ? <h2 style={{ color: 'red' }}>An error occurred when loading goods</h2>
        : <GoodsList goods={goods} />}
    </div>
  );
};
