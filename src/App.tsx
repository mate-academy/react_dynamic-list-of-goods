/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllHandler = useCallback(async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      console.error('Can\'t get All Goods');
    }
  }, []);

  const get5FirstClick = useCallback(async () => {
    try {
      const firstFiveGoods = await get5First();

      setGoods(firstFiveGoods);
    } catch (error) {
      console.error('Can\'t get first five Goods');
    }
  }, []);

  const getRedHandler = useCallback(async () => {
    try {
      const redGoods = await getRed();

      setGoods(redGoods);
    } catch (error) {
      console.error('Can\'t get red Goods');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
