import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const getGoodsAll = async () => {
    const goods = await getAll();

    setAllGoods(goods);
  };

  const getFirstFiveGoods = async () => {
    const goods = await get5First();

    setAllGoods(goods);
  };

  const renderGetRedGoods = async () => {
    const goods = await getRedGoods();

    setAllGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={getGoodsAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={renderGetRedGoods}
      >
        Load red goods
      </button>
      <GoodsList
        goods={allGoods}
      />

    </div>

  );
};
