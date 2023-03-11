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

  const getGoods = (param: SortType): void => {
    switch (param) {
      case SortType.ALL:
        getAll()
          .then(newGoods => {
            setGoods(newGoods);
          });
        break;

      case SortType.FIRST5:
        get5First()
          .then(newGoods => {
            setGoods(newGoods);
          });
        break;

      case SortType.RED:
        getRedGoods()
          .then(newGoods => {
            setGoods(newGoods);
          });
        break;

      default:
        throw new Error('unknown sort type');
    }
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
