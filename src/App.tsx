import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllGoods = useCallback(async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  }, []);

  const handleGetFirstFiveGoods = useCallback(async () => {
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
  }, []);

  const handleGetRedGoods = useCallback(async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
