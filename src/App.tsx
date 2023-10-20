import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleLoadAll = async () => {
    setHasError(false);
    try {
      const goodsToShow = await getAll();

      setGoods(goodsToShow);
    } catch {
      setHasError(true);
    }
  };

  const handleLoadFirst5 = async () => {
    setHasError(false);
    try {
      const goodsToShow = await get5First();

      setGoods(goodsToShow);
    } catch {
      setHasError(true);
    }
  };

  const handleLoadRed = async () => {
    setHasError(false);
    try {
      const goodsToShow = await getRedGoods();

      setGoods(goodsToShow);
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
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRed}
      >
        Load red goods
      </button>

      {hasError
        ? (
          <p>
            Oops! Something went wrong...
            We are doing our best to fix this problem!
          </p>
        )
        : <GoodsList goods={goods} />}
    </div>
  );
};
