import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = async () => {
    const goodsAll = await getAll();

    setGoods(goodsAll);
  };

  const fiveFirst = async () => {
    const goodsFive = await get5First();

    setGoods(goodsFive);
  };

  const redGood = async () => {
    const goodsRed = await getRedGoods();

    setGoods(goodsRed);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fiveFirst}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGood}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
