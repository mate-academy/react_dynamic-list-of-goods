import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAllGoods = async () => {
    const result = await getAll();

    setGoods(result);
  };

  const handleClickFirst5 = async () => {
    const result = await get5First();

    setGoods(result);
  };

  const handleClickReds = async () => {
    const result = await getRedGoods();

    setGoods(result);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickReds}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
