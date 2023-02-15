import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    try {
      const goods = await getAll();

      setVisibleGoods(goods);
    } catch (error) {
      throw new Error('Something went wrong. Try again later, please');
    }
  };

  const handle5First = async () => {
    try {
      const goods = await get5First();

      setVisibleGoods(goods);
    } catch (error) {
      throw new Error('Something went wrong. Try again later, please');
    }
  };

  const handleRedGoods = async () => {
    try {
      const goods = await getRedGoods();

      setVisibleGoods(goods);
    } catch (error) {
      throw new Error('Something went wrong. Try again later, please');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
