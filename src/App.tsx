import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[] | null>(null);

  const handleLoadAll = async () => {
    setVisibleGoods(await getAll());
  };

  const handleLoadFirst5 = async () => {
    setVisibleGoods(await get5First());
  };

  const handleLoadRed = async () => {
    setVisibleGoods(await getRed());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadAll()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadFirst5()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadRed()}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
