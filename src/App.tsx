import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAlls = async () => {
    const good = await getAll();

    try {
      setGoods(good);
    } catch {
      throw new Error('Not found');
    }
  };

  const getFive = async () => {
    const good = await get5First();

    try {
      setGoods(good);
    } catch {
      throw new Error('');
    }
  };

  const getRed = async () => {
    const good = await getRedGoods();

    try {
      setGoods(good);
    } catch {
      throw new Error('');
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
