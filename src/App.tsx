import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    try {
      const data = await getAll();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading all goods:', error);
    }
  };

  const handleLoad5First = async () => {
    try {
      const data = await get5First();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading 5 first goods:', error);
    }
  };

  const handleLoadRed = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading red goods:', error);
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
        onClick={handleLoad5First}
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
