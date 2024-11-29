import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    try {
      const loadedGoods = await getAll();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading goods:', error);
    }
  };

  const loadFirst5Goods = async () => {
    try {
      const loadedGoods = await get5First();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading first 5 goods:', error);
    }
  };

  const loadRedGoods = async () => {
    try {
      const loadedGoods = await getRedGoods();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading red goods:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
