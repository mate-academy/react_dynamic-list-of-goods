import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function allGoods() {
    const allGood = await getAll();

    setGoods(allGood);
  }

  async function firstFiveGoods() {
    const fiveGood = await get5First();

    setGoods(fiveGood);
  }

  async function redGood() {
    const red = await getRedGoods();

    setGoods(red);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGood}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
