import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAllGoods, getFiveFirstGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';
export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const all = async () => {
    const goods = await getAllGoods();

    setAllGoods(goods);
  };

  const firstFive = async () => {
    const goods = await getFiveFirstGoods();

    setAllGoods(goods);
  };

  const red = async () => {
    const goods = await getRedGoods();

    setAllGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={all} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={firstFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={red} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
