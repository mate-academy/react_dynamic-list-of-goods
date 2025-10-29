import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      // eslint-disable-next-line
      console.error('Failed to load all goods:', error);
    }
  };

  const loadFiveGoods = async () => {
    try {
      const allGoods = await get5First();

      setGoods(allGoods);
    } catch (error) {
      // eslint-disable-next-line
      console.error('Failed to load 5 goods:', error);
    }
  };

  const loadRedGoods = async () => {
    try {
      const allGoods = await getRedGoods();

      setGoods(allGoods);
    } catch (error) {
      // eslint-disable-next-line
      console.error('Failed to load red goods:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
