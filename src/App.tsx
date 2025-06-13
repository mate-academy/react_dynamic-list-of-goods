import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleLoadFirstFive = async () => {
    const firstFiveGoods = await get5First();

    setGoods(firstFiveGoods);
  };

  const handleLoadRed = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button type="button" data-cy="all-button" onClick={handleLoadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={handleLoadRed}>
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
