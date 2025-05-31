import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleLoadFirst5Goods = async () => {
    const first5Goods = await get5First();

    setGoods(first5Goods);
  };

  const handleLoadRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={handleLoadAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={handleLoadFirst5Goods}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={handleLoadRedGoods} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
