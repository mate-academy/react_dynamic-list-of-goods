import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const goods = await getAll();

    setGoodsList(goods);
  };

  const load5FirstGoods = async () => {
    const goods = await get5First();

    setGoodsList(goods);
  };

  const loadRedGoods = async () => {
    const goods = await getRedGoods();

    setGoodsList(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      {goodsList.length > 0 && <GoodsList goods={goodsList} />}
    </div>
  );
};
