import React, { useCallback, useState } from 'react';
import './App.scss';
import classNames from 'classnames';

import { GoodsList } from './api/components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum SortBy {
  None = '',
  ALL = 'all-button',
  FirstFive = 'first-five-button',
  RED = 'red-button',
}

const sortByOption = (sortType: SortBy) => {
  const sortByType = {
    [SortBy.None]: '',
    [SortBy.ALL]: 'Load all goods',
    [SortBy.FirstFive]: 'Load 5 first goods',
    [SortBy.RED]: 'Load red goods',
  };

  return sortByType[sortType];
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.None);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getGoods = useCallback(async (promise: Promise<Good[]>) => {
    setLoading(true);

    try {
      setGoods(await promise);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClick = useCallback((sortType: SortBy) => {
    if (sortBy === sortType) {
      return;
    }

    switch (sortType) {
      case SortBy.ALL:
        getGoods(getAll());
        break;

      case SortBy.FirstFive:
        getGoods(get5First());
        break;

      case SortBy.RED:
        getGoods(getRedGoods());
        break;

      default:
        break;
    }

    setSortBy(sortType);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      {Object.values(SortBy).filter(value => value).map(currentValue => (
        <button
          className={classNames(
            'button',
            'mb-4',
            'mr-4',
            'is-success',
            { 'is-light': currentValue !== sortBy },
          )}
          type="button"
          data-cy={currentValue}
          onClick={() => handleClick(currentValue)}
        >
          {sortByOption(currentValue)}
        </button>
      ))}

      {loading
        ? (
          <div className="LoadingItem">
            <p>Loading</p>
            <span className="loader" />
          </div>
        )
        : (
          <>
            {error && (
              <p>Something went wrong</p>
            )}
          </>
        )}

      {!loading && <GoodsList goods={goods} />}
    </div>
  );
};
