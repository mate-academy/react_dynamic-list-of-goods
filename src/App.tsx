import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getCallback = async (callBackFunc: () => Promise<Good[]>) => {
    const goodsFromApi = await callBackFunc();

    return goodsFromApi;
  };

  const handleGoods = async (promiseFunc: () => Promise<Good[]>) => {
    try {
      setHasError(false);
      setIsLoading(true);
      const goodsFromApi = await getCallback(promiseFunc);

      setGoods(goodsFromApi);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isLoading
        ? (
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50" />
          </svg>
        )
        : <GoodsList goods={goods} hasError={hasError} />}

    </div>
  );
};
