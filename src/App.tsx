import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoodsHandler = async () => setGoods(await getAll());
  const firstFiveGoodsHandler = async () => setGoods(await get5First());
  const redGoodsHandler = async () => setGoods(await getRedGoods());

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoodsHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={redGoodsHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
