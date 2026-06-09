import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [typeOfGoods, setTypeOfGoods] = useState('all');

  const allGetters: Record<string, () => Promise<void>> = useMemo(
    () => ({
      all: () => getAll().then((data: Good[]) => setGoods(data)),
      'first-five': () => get5First().then((data: Good[]) => setGoods(data)),
      red: () => getRed().then((data: Good[]) => setGoods(data)),
    }),
    [],
  );

  useEffect(() => {
    allGetters[typeOfGoods]();
  }, [typeOfGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setTypeOfGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setTypeOfGoods('first-five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setTypeOfGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods ?? []} />
    </div>
  );
};
