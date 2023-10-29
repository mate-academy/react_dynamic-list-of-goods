import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Filter } from './types/Filter';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState(Filter.GETALL);

  useEffect(() => {
    switch (filter) {
      case Filter.GET5FIRST:
        get5First()
          .then(setGoods);
        break;
      case Filter.GETREDGOODS:
        getRedGoods()
          .then(setGoods);
        break;
      default:
        getAll()
          .then(setGoods);
        break;
    }
  }, [filter]);

  const handlerSetFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handlerSetFilter(Filter.GETALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handlerSetFilter(Filter.GET5FIRST)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handlerSetFilter(Filter.GETREDGOODS)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
