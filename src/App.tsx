import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [availableGoods, setAvailableGoods] = useState<Good[]>([]);

  const showAllClick = async () => {
    const allGoods = await getAll()

    setAvailableGoods(allGoods);
  }

  const showFirstFiveSortedGoods = async () => {
    const firstFive = await get5First()

    setAvailableGoods(firstFive);
  }

  const showRedGoods = async () => {
    const allRed = await getRedGoods()

    setAvailableGoods(allRed);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFirstFiveSortedGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={availableGoods} />
    </div>
  );
};
