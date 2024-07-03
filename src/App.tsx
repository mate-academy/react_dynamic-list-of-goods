import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const fiveFirst = async () => {
    const firstFive = await get5First();

    setGoods(firstFive);
  };

  const redOnly = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fiveFirst}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redOnly}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
