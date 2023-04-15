import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum GoodsFilter {
  None = 'none',
  All = 'all-button',
  FirstFive = 'first-five-button',
  Red = 'red-button',
}

const getButtonName = (sortType: GoodsFilter) => {
  const contentBySortType = {
    [GoodsFilter.All]: 'Load all goods',
    [GoodsFilter.FirstFive]: 'Load 5 first goods',
    [GoodsFilter.Red]: 'Load red goods',
    [GoodsFilter.None]: '',
  };

  return contentBySortType[sortType];
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<GoodsFilter>(GoodsFilter.None);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getGoods = useCallback(async (promise: Promise<Good[]>) => {
    setIsLoading(true);

    try {
      const loadedGoods = await promise;

      setGoods(loadedGoods);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClick = useCallback((sortType: GoodsFilter) => {
    if (sort === sortType) {
      return;
    }

    switch (sortType) {
      case GoodsFilter.All:
        getGoods(getAll());
        break;

      case GoodsFilter.FirstFive:
        getGoods(get5First());
        break;

      case GoodsFilter.Red:
        getGoods(getRedGoods());
        break;

      default:
        break;
    }

    setSort(sortType);
  }, [getGoods, sort]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {Object.values(GoodsFilter)
        .filter(value => value)
        .map(current => (
          <button
            type="button"
            data-cy={current}
            onClick={() => {
              handleClick(current);
            }}
          >
            {getButtonName(current)}
          </button>
        ))}

      {isLoading && <p>Is Loading...</p>}

      {isError && <p>Something went wrong</p>}

      {!isLoading && !isError && <GoodsList goods={goods} />}
    </div>
  );
};
