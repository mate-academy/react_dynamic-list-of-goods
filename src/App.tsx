import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllGoods = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      throw new Error('Data load failed');
    }
  };

  const handleFirstFive = async () => {
    try {
      const getFirst5 = await get5First();

      setGoods(getFirst5);
    } catch {
      throw new Error('Data load failed');
    }
  };

  const handleAllRed = async () => {
    try {
      const getAllRed = await getRed();

      setGoods(getAllRed);
    } catch {
      throw new Error('Data load failed');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleAllRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
