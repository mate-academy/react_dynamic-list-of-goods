import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async (): Promise<void> => {
    try {
      const allGoods: Good[] = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch (error) {
      throw new Error('Failed to fetch');
    }
  };

  const handleLoadFirstFive = async (): Promise<void> => {
    try {
      const firstFive: Good[] = await goodsAPI.get5First();

      setGoods(firstFive);
    } catch (error) {
      throw new Error('Failed to fetch');
    }
  };

  const handleLoadRed = async (): Promise<void> => {
    try {
      const redGoods: Good[] = await goodsAPI.getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      throw new Error('Failed to fetch');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
