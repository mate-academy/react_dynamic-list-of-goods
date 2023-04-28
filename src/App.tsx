import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      throw new Error();
    }
  };

  const load5Goods = async () => {
    try {
      const first5goods = await get5First();

      setGoods(first5goods);
    } catch (error) {
      throw new Error();
    }
  };

  const loadRedGoods = async () => {
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      throw new Error();
    }
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
        onClick={load5Goods}
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

      <GoodsList
        goods={goods}
      />
    </div>
  );
};
