import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum SortType {
  All,
  First5,
  Red,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback(async (sortType: SortType) => {
    let goodsFromServer: Good[] = [];

    switch (sortType) {
      case SortType.All:
        goodsFromServer = await getAll();
        break;
      case SortType.First5:
        goodsFromServer = await get5First();
        break;
      case SortType.Red:
        goodsFromServer = await getRedGoods();
        break;
      default:
        goodsFromServer = await getAll();
    }

    setGoods(goodsFromServer);
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(SortType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(SortType.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(SortType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
