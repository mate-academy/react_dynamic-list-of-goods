import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAlls = async () => {
    try {
      setGoods(await getAll());
    } catch (error) {
      throw new Error('Not found');
    }
  };

  const getFive = async () => {
    try {
      setGoods(await get5First());
    } catch {
      throw new Error('Not found');
    }
  };

  const getRed = async () => {
    try {
      setGoods(await getRedGoods());
    } catch {
      throw new Error('Not found');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAlls}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
