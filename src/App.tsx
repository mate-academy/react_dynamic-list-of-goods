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
  const [sortType, setSortType] = useState<SortType>();

  const getGoods = async (promise: Promise<Good[]>): Promise<void> => {
    setGoods(await promise);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          if (sortType !== SortType.ALL) {
            setSortType(SortType.ALL);
            getGoods(getAll());
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          if (sortType !== SortType.FIRST5) {
            setSortType(SortType.FIRST5);
            getGoods(get5First());
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          if (sortType !== SortType.RED) {
            setSortType(SortType.RED);
            getGoods(getRedGoods());
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
