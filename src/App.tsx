import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function shouldShowAllGoods() {
    const allGoods = await getAll();

    setGoods(allGoods);
  }

  async function shouldShowFirstFive() {
    const fiveFirstGoods = await get5First();

    setGoods(fiveFirstGoods);
  }

  async function shouldShowRed() {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={shouldShowAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={shouldShowFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={shouldShowRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
