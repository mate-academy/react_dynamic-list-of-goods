import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasRejectRespones, setHasRejectRespones] = useState(false);

  const handleGetAllGoods = useCallback(async () => {
    try {
      setHasRejectRespones(false);
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      setHasRejectRespones(true);
    }
  }, []);

  const handleGetFirstFiveGoods = useCallback(async () => {
    try {
      setHasRejectRespones(false);
      const fiveGoods = await get5First();

      setGoods(fiveGoods);
    } catch (error) {
      setHasRejectRespones(true);
    }
  }, []);

  const handleGetRedGoods = useCallback(async () => {
    try {
      setHasRejectRespones(false);
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      setHasRejectRespones(true);
    }
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

      {hasRejectRespones
        ? <p>Server response error, please try again</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
