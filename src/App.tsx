import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    const loadedGoods = await getAll();

    setAllGoods(loadedGoods);
  };

  const loadFirstFive = async () => {
    const loadedFirstFive = await get5First();

    setAllGoods(loadedFirstFive);
  };

  const loadRedOnes = async () => {
    const loadedRedOnes = await getRedGoods();

    setAllGoods(loadedRedOnes);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFive}

      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedOnes}

      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
