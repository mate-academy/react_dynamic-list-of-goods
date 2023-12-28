import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState({
    all: true,
    firstFive: false,
    onlyRed: false,
  });

  useEffect(() => {
    if (filter.all) {
      getAll()
        .then(setGoods);
    }

    if (filter.firstFive) {
      get5First()
        .then(setGoods);
    }

    if (filter.onlyRed) {
      getRedGoods()
        .then(setGoods);
    }
  }, [filter]);

  const changeFilter = (filterName: string) => {
    setFilter({
      all: filterName === 'all',
      firstFive: filterName === 'firstFive',
      onlyRed: filterName === 'onlyRed',
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => changeFilter('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => changeFilter('firstFive')}

      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => changeFilter('onlyRed')}

      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
