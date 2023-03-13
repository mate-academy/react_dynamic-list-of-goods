/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllClick = async () => {
    try {
      setGoods(await getAll());
    } catch (error) {
      console.warn('Error while fetching all goods:', error);
    }
  };

  const handleFirstFiveClick = async () => {
    try {
      setGoods(await get5First());
    } catch (error) {
      console.warn('Error while fetching first 5 goods:', error);
    }
  };

  const handleRedClick = async () => {
    try {
      setGoods(await getRedGoods());
    } catch (error) {
      console.warn('Error while fetching red goods:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
