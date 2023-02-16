import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    const allGoods = await getAll();

    setVisibleGoods(allGoods);
  };

  const handleFiveGoods = async () => {
    const fiveGoods = await get5First();

    setVisibleGoods(fiveGoods);
  };

  const handleRedGoods = async () => {
    const redGoods = await getRedGoods();

    setVisibleGoods(redGoods);
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
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
