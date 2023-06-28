import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllOnClick = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const get5FirstOnClick = async () => {
    const first5 = await get5First();

    setGoods(first5);
  };

  const getRedOnClick = async () => {
    const red = await getRedGoods();

    setGoods(red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllOnClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstOnClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedOnClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
