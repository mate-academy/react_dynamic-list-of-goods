import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const enum ListFilterType {
  All,
  First5,
  Red,
  None,
}

function getFiltredList(filrer: ListFilterType) {
  switch (filrer) {
    case ListFilterType.All:
      return getAll();

    case ListFilterType.First5:
      return get5First();

    case ListFilterType.Red:
      return getRedGoods();

    default:
      return null;
  }
}

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);
  const [filter, setFilter] = useState<ListFilterType>(ListFilterType.None);

  useEffect(() => {
    getFiltredList(filter)?.then(products => setGoodList(products));
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setFilter(ListFilterType.All);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setFilter(ListFilterType.First5);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setFilter(ListFilterType.Red);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};
