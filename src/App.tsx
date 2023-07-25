import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum Goods {
  ALL = 'all',
  FIVE = 'five',
  RED = 'red',
  NOTHING = '',
}

function getVisibleGoods(good: Goods): Promise<Good[]> | null {
  switch (good) {
    case Goods.ALL:
      return getAll();

    case Goods.FIVE:
      return get5First();

    case Goods.RED:
      return getRedGoods();

    default:
      return null;
  }
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleGoods, setVisibleGoods] = useState(Goods.NOTHING);

  useEffect(() => {
    getVisibleGoods(visibleGoods)?.then(setGoods);
  }, [visibleGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setVisibleGoods(Goods.ALL);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setVisibleGoods(Goods.FIVE);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setVisibleGoods(Goods.RED);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
