import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGood] = useState<Good[]>([]);

  const loadGoodsAll = async () => {
    const goods = await getAll();

    setSelectedGood(goods);
  };

  const loadGoods5 = async () => {
    const goods = await get5First();

    setSelectedGood(goods);
  };

  const loadGoodsRead = async () => {
    const goods = await getRedGoods();

    setSelectedGood(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoodsAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadGoods5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadGoodsRead}
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />
    </div>
  );
};
