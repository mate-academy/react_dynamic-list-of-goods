import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum Sort {
  None = '',
  All = 'all-button',
  FirstFive = 'first-five-button',
  Red = 'red-button',
}

const getButtonName = (sortType: Sort) => {
  const contentBySortType = {
    [Sort.All]: 'Load all goods',
    [Sort.FirstFive]: 'Load 5 first goods',
    [Sort.Red]: 'Load red goods',
    [Sort.None]: '',
  };

  return contentBySortType[sortType];
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<Sort>(Sort.None);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getGoods = useCallback(async (promise: Promise<Good[]>) => {
    setIsLoading(true);

    try {
      setGoods(await promise);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClick = useCallback((sortType: Sort) => {
    if (sort === sortType) {
      return;
    }

    switch (sortType) {
      case Sort.All:
        getGoods(getAll());
        break;

      case Sort.FirstFive:
        getGoods(get5First());
        break;

      case Sort.Red:
        getGoods(getRedGoods());
        break;

      default:
        break;
    }

    setSort(sortType);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {Object.values(Sort)
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

      {isLoading
        ? <p>Is Loading...</p>
        : (
          <>
            {isError && (
              <p>Something went wrong</p>
            )}

            <GoodsList goods={goods} />
          </>
        )}
    </div>
  );
};
