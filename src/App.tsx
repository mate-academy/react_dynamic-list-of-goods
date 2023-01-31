import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = async () => {
    const loadedGoods = await getAll();

    setGoods(loadedGoods);
  };

  const handlerFirstFive = async () => {
    const loadedGoods = await get5First();

    setGoods(loadedGoods);
  };

  const handlerRedGoods = async () => {
    const loadedGoods = await getRedGoods();

    setGoods(loadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
