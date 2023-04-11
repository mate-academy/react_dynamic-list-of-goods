import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Loader } from './components/Loader';

enum GoodsType {
  Default = '',
  All = 'all',
  FirstFive = 'firstFive',
  OnlyRed = 'onlyRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);

  const handleGoods = async (
    promiseFunc: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    try {
      setHasError(false);
      setIsLoading(true);
      const goodsFromApi = await promiseFunc();

      setCurrentGoodsType(goodsType);
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

      {isLoading
        ? (
          <Loader />
        )
        : (
          <>
            <button
              type="button"
              data-cy="all-button"
              onClick={() => handleGoods(getAll, GoodsType.All)}
              disabled={currentGoodsType === GoodsType.All}
            >
              Load all goods
            </button>

            <button
              type="button"
              data-cy="first-five-button"
              onClick={() => handleGoods(get5First, GoodsType.FirstFive)}
              disabled={currentGoodsType === GoodsType.FirstFive}
            >
              Load 5 first goods
            </button>

            <button
              type="button"
              data-cy="red-button"
              onClick={() => handleGoods(getRedGoods, GoodsType.OnlyRed)}
              disabled={currentGoodsType === GoodsType.OnlyRed}
            >
              Load red goods
            </button>
            { hasError
              ? (<p>Error, server is unavailable</p>)
              : (<GoodsList goods={goods} />)}
          </>
        )}

    </div>
  );
};
