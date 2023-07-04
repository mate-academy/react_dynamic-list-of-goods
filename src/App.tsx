import { FC, useRef, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getSomeGoods, getGoodsSortedByColor } from './api/goods';
import { Good, QueryType } from './types/Good';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const quaryType = useRef<QueryType | null>(null);

  const getAllGoods = async () => {
    if (quaryType.current === QueryType.ALL) {
      return;
    }

    try {
      setGoods(await getAll());
      quaryType.current = QueryType.ALL;
    } catch {
      throw Error('Error message');
    }
  };

  const getFiveGoods = async () => {
    if (quaryType.current === QueryType.SOME) {
      return;
    }

    try {
      setGoods(await getSomeGoods(5));
      quaryType.current = QueryType.SOME;
    } catch {
      throw Error('Error message');
    }
  };

  const getRedGoods = async () => {
    if (quaryType.current === QueryType.COLOR) {
      return;
    }

    try {
      setGoods(await getGoodsSortedByColor('red'));
      quaryType.current = QueryType.COLOR;
    } catch {
      throw Error('Error message');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAllGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getFiveGoods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
