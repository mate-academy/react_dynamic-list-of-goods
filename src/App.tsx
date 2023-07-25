import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum Filter {
  All = 'all',
  Five = 'five',
  Red = 'red',
  None = '',
}

function preparedGoods(filter: Filter): Promise<Good[]> | null {
  switch (filter) {
    case Filter.All:
      return getAll();
    case Filter.Five:
      return get5First();
    case Filter.Red:
      return getRedGoods();
    default:
      return null;
  }
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.None);

  useEffect(() => {
    preparedGoods(filter)?.then(response => setGoods(response));
  }, [filter]);

  function getAllGoods() {
    setFilter(Filter.All);
  }

  function get5FirstGoods() {
    setFilter(Filter.Five);
  }

  function getRed() {
    setFilter(Filter.Red);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load All goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
