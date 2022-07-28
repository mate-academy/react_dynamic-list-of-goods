import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    const goods: Good[] = await getAll();

    setGoods(goods);
  };

  const load5First = async () => {
    const goods: Good[] = await get5First();

    setGoods(goods);
  };

  const loadRedGoods = async () => {
    const goods: Good[] = await getRedGoods();

    setGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
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

      {goodsList.length > 0 && (
        <GoodsList goods={goodsList} />
      )}
    </div>
  );
};
