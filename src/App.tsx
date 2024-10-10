import { useEffect, useState, FC } from 'react';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { List } from './types/List';
import { Good } from './types/Good';

import './App.scss';

export const App: FC = () => {
  const [typeOfList, setTypeOfList] = useState<List>(List.DEFAULT);
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    switch (typeOfList) {
      case List.ALL:
        getAll().then(setGoods);
        break;

      case List.FIRST_FIVE:
        get5First().then(setGoods);
        break;

      case List.RED:
        getRedGoods().then(setGoods);
    }
  }, [typeOfList]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setTypeOfList(List.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setTypeOfList(List.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setTypeOfList(List.RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
