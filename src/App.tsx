import React, { useState } from 'react';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

enum FilterType {
  all,
  first5,
  red,
  none,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterBy, setFilterBy] = useState<FilterType>(FilterType.none);

  const loadGoods = (promise: Promise<Good[]>, filterType: FilterType) => {
    if (filterType !== filterBy) {
      promise.then(loadedGoods => setGoods(loadedGoods));
      setFilterBy(filterType);
    }
  };

  return (
    <div className="App box">
      <h1 className="h1 title">Dynamic list of Goods</h1>

      <div className="buttons is-centered are-small">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll(), FilterType.all)}
          className={classNames(
            'button is-primary is-light',
            { 'is-normal': filterBy === FilterType.all },
          )}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First(), FilterType.first5)}
          className={classNames(
            'button is-primary is-light',
            { 'is-normal': filterBy === FilterType.first5 },
          )}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods(), FilterType.red)}
          className={classNames(
            'button is-primary is-light',
            { 'is-normal': filterBy === FilterType.red },
          )}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
