import React, { useState } from 'react';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

enum GoodsType {
  Default,
  All,
  FirstFive,
  OnlyRed,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const getLoadHandler = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    return () => {
      if (currentGoodsType !== goodsType) {
        setIsLoading(true);
        getGoods()
          .then(setGoods)
          .catch(() => setIsLoadingError(true))
          .finally(() => setIsLoading(false));
        setCurrentGoodsType(goodsType);
      }
    };
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getLoadHandler(getAll, GoodsType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getLoadHandler(get5First, GoodsType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getLoadHandler(getRedGoods, GoodsType.OnlyRed)}
      >
        Load red goods
      </button>

      {isLoadingError ? (
        <p className="text">An error occurred while loading goods!</p>
      ) : (
        <>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <GoodsList goods={goods} />
          )}
        </>
      )}

    </div>
  );
};
