import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Array<Good>>([]);

  const handleAll = async () => {
    try {
      const result = await getAll();

      setGoods(result);
    } catch (error) {
      setGoods([]);
    }
  };

  const handleGetRed = async () => {
    try {
      const result = await getRedGoods();

      setGoods(result);
    } catch (error) {
      setGoods([]);
    }
  };

  const handleGetFirst5 = async () => {
    try {
      const result = await get5First();

      setGoods(result);
    } catch (error) {
      setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
