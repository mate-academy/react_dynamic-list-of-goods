import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    const goodsList = await goodsAPI.getAll();

    setGoods(goodsList);
  };

  const handleGet5First = async () => {
    const first5Goods = await goodsAPI.get5First();

    setGoods(first5Goods);
  };

  const handleGetRedGoods = async () => {
    const redGoods = await goodsAPI.getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
