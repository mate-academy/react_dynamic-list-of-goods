import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const isEmpty = goods.length === 0;
  const arentRed = goods.some((good) => good.color !== 'red');
  const areRed = goods.every((good) => good.color === 'red');

  const handleLoadAllGoods = async () => {
    const loadedGoods = await getAll();

    return (isEmpty || goods.length === 5)
      ? (
        setGoods(loadedGoods)
      )
      : (
        setGoods([])
      );
  };

  const handlerFirstFive = async () => {
    const loadedGoods = await get5First();

    if (isEmpty || goods.length > 5) {
      setGoods(loadedGoods);
    } else if (goods.length === 5 && arentRed) {
      setGoods([]);
    } else if (goods.length === 5 && areRed) {
      setGoods(loadedGoods);
    }
  };

  const handlerRedGoods = async () => {
    const loadedGoods = await getRedGoods();

    return (isEmpty || arentRed)
      ? (
        setGoods(loadedGoods)
      )
      : (
        setGoods([])
      );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
