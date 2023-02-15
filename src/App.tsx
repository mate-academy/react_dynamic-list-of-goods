import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleGetAll = async () => {
    try {
      const goodsFromServer = await getAll();

      setGoods(goodsFromServer);
    } catch {
      setError('fucking Error!');
    }
  };

  const handleFirsFive = async () => {
    try {
      const goodsFromServer = await get5First();

      setGoods(goodsFromServer);
    } catch {
      setError('fucking Error!');
    }
  };

  const handleRed = async () => {
    try {
      const goodsFromServer = await getRed();

      setGoods(goodsFromServer);
    } catch {
      setError('fucking Error!');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirsFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {error && `Something went wrong... Error - ${error}`}
    </div>
  );
};
