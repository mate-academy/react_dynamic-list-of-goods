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
  const [isLoadingError, setIsLoadingError] = useState(false);

  const handleLoad = (
    getGoods: () => Promise<Good[]>,
    goodsType: GoodsType = GoodsType.Default,
  ) => {
    return () => {
      if (currentGoodsType !== goodsType) {
        getGoods()
          .then(setGoods)
          .catch(() => setIsLoadingError(true));
        setCurrentGoodsType(goodsType);
      }
    };
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {isLoadingError && (
        <p className="text">An error occurred while loading goods!</p>
      )}

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoad(getAll, GoodsType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad(get5First, GoodsType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoad(getRedGoods, GoodsType.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
