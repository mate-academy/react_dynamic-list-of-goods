import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const loadAllGoods = async () => {
    const data = await getAll();

    setGoods(data);
  };

  const load5Goods = async () => {
    const data = await get5First();

    setGoods(data);
  };

  const loadReds = async () => {
    const data = await getRedGoods();

    setGoods(data);
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
        onClick={load5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadReds}
      >
        Load red goods
      </button>

      {
        goods && <GoodsList goods={goods} />
      }
    </div>
  );
};
