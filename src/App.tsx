import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const handleLoadGoods = async () => {
    setAllGoods(await getAll());
  };

  const handleFirst5Goods = async () => {
    setAllGoods(await get5First());
  };

  const handleRedGoods = async () => {
    setAllGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Goods}
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

      <GoodsList goods={allGoods} />
    </div>
  );
};
