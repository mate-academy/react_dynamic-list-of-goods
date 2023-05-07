import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const { getAll, get5First, getRedGoods } = goodsAPI;

  const handlingAllGoods = async () => {
    const goods = await getAll();

    setVisibleGoods(goods);
  };

  const handlingFirstFiveGoods = async () => {
    const goods = await get5First();

    setVisibleGoods(goods);
  };

  const handlingRedGoods = async () => {
    const goods = await getRedGoods();

    setVisibleGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlingAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlingFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlingRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
