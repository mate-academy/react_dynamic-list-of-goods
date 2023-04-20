import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';

import { GoodsList } from './api/components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './api/components/Loader';

enum FilterBy {
  ALL = 'all-button',
  FirstFive = 'first-five-button',
  RED = 'red-button',
}

const FilterByOption = (filterType: FilterBy) => {
  const filterButtons = {
    [FilterBy.ALL]: 'Load all goods',
    [FilterBy.FirstFive]: 'Load 5 first goods',
    [FilterBy.RED]: 'Load red goods',
  };

  return filterButtons[filterType];
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterBy, setFilterBy] = useState<FilterBy>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getGoods = async (callback: () => Promise<Good[]>) => {
    setIsLoading(true);

    try {
      setGoods(await callback());
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  const handleClick = (filterType: FilterBy) => {
    if (filterBy === filterType) {
      return;
    }

    switch (filterType) {
      case FilterBy.ALL:
        getGoods(getAll);
        break;

      case FilterBy.FirstFive:
        getGoods(get5First);
        break;

      case FilterBy.RED:
        getGoods(getRedGoods);
        break;

      default:
        break;
    }

    setFilterBy(filterType);
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      {Object.values(FilterBy).filter(value => value).map(currentValue => (
        <button
          className={classNames(
            'button',
            'mb-4',
            'mr-4',
            'is-success',
            { 'is-light': currentValue !== filterBy },
          )}
          type="button"
          data-cy={currentValue}
          key={currentValue}
          onClick={() => handleClick(currentValue)}
        >
          {FilterByOption(currentValue)}
        </button>
      ))}

      {isLoading
      && <Loader />}

      {isError && !isLoading && (
        <p>Something went wrong</p>
      )}

      {!isLoading && !isError && <GoodsList goods={goods} />}
    </div>
  );
};
