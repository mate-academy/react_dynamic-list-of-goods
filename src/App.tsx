import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum Filter {
  All = 'all',
  Five = 'five',
  Red = 'red',
  Nothing = '',
}

function getGoods(filter: Filter): Promise<Good[]> | null {
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
  const [filter, setFilter] = useState<Filter>(Filter.Nothing);

  useEffect(() => {
    getGoods(filter)?.then(products => setGoods(products));
  }, [filter]);

  const allGoodsHandler = () => {
    setFilter(Filter.All);
  };

  const FirstFiveGoodsHandler = () => {
    setFilter(Filter.Five);
  };

  const redGoodsHandler = () => {
    setFilter(Filter.Red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoodsHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={FirstFiveGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={redGoodsHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
