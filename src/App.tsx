import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadAllGoods = async () => {
    setIsLoading(true);
    const allGoods = await getAll();

    setGoods(allGoods);
    setIsLoading(false);
  };

  const load5First = async () => {
    setIsLoading(true);
    const top5 = await get5First();

    setGoods(top5);
    setIsLoading(false);
  };

  const loadRed = async () => {
    setIsLoading(true);
    const red = await getRedGoods();

    setGoods(red);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
        disabled={isLoading}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
