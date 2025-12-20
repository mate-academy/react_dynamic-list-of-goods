/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    try {
      const data = await goodsAPI.getAll();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load all goods:', error);
    }
  };

  const loadFirstFive = async () => {
    try {
      const data = await goodsAPI.get5First();

      setGoods(data);
    } catch (error) {
      console.error('Failed to load first five goods:', error);
    }
  };

  const loadRed = async () => {
    try {
      const data = await goodsAPI.getRedGoods();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load red goods:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load first 5 goods
      </button>
      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
