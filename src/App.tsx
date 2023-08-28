import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const handleAllGoods = async (): Promise<void> => {
    try {
      const goods = await getAll();

      setAllGoods(goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('No gooods', error);
    }
  };

  const handle5Goods = async () => {
    const goods = await get5First();

    setAllGoods(goods);
  };

  const handleRedGoods = async () => {
    const goods = await getRedGoods();

    setAllGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
