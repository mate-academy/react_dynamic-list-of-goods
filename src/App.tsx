import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    setAllGoods(await getAll());
  };

  const handleFirstFiveGoods = async () => {
    setAllGoods(await get5First());
  };

  const handleOnlyRedGoods = async () => {
    setAllGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleOnlyRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
