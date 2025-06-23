import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getData = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const getDataOnly5 = async () => {
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
  };

  const getOnlyRed = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getData}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getDataOnly5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
