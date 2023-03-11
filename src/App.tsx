import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

enum SortType {
  ALL,
  FIRST5,
  RED,
}

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = async (param: SortType): Promise<void> => {
    let newGoods: Good[];

    switch (param) {
      case SortType.ALL:
        newGoods = await getAll();
        break;

      case SortType.FIRST5:
        newGoods = await get5First();
        break;

      case SortType.RED:
        newGoods = await getRedGoods();
        break;

      default:
        throw new Error('unknown sort type');
    }

    setGoods(newGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getGoods(SortType.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getGoods(SortType.FIRST5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getGoods(SortType.RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
