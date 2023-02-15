import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleClickButtonAll = async () => {
    try {
      const visibleGoods = await getAll();

      setGoods(visibleGoods);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  };

  const handleClickButtonFive = async () => {
    try {
      const visibleGoods = await get5First();

      setGoods(visibleGoods);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  };

  const handleClickButtonRed = async () => {
    try {
      const visibleGoods = await getRedGoods();

      setGoods(visibleGoods);
      setHasError(false);
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
        onClick={handleClickButtonAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickButtonFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickButtonRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {hasError && (
        <p className="error">
          Goods not found
        </p>
      )}
    </div>
  );
};
