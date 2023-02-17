import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    const getGoods = await getAll();

    setGoods(getGoods);
  };

  const loadFirstFive = async () => {
    const getFiveGoods = await get5First();

    setGoods(getFiveGoods);
  };

  const getRedGood = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGood}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
