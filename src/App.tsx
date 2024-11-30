import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const getFiveGoods = async () => {
    const firstFiveGoods = await get5First();

    setGoods(firstFiveGoods);
  };

  const getOnlyRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getOnlyRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
