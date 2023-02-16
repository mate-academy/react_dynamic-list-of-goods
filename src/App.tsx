import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const goodsFromServer = await getAll();

    setVisibleGoods(goodsFromServer);
  };

  const getFirstFive = async () => {
    const goodsFromServer = await get5First();

    await setVisibleGoods(goodsFromServer);
  };

  const getAllRed = async () => {
    const goodsFromServer = await getRedGoods();

    await setVisibleGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1>
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getAllRed}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
