import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAll = async () => {
    const goods = await getAll();
    setGoods(goods);
  };

  const fetchFive = async () => {
    const goods = await get5First();
    setGoods(goods);
  };

  const fetchRed = async () => {
    const goods = await getRedGoods();
    setGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={fetchAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fetchFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={fetchRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
