import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const showFiveGoods = async () => {
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
  };

  const showRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={showFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
