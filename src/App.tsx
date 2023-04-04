import { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = async () => {
    const newGoods = await getAll();

    setGoods(newGoods);
  };

  const fiveGoods = async () => {
    const newGoods = await get5First();

    setGoods(newGoods);
  };

  const getRedGood = async () => {
    const newGoods = await getRedGoods();

    setGoods(newGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGood}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
