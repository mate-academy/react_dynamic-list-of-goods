import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const AllGoods = useCallback(async () => {
    try {
      const loadedGoods = await getAll();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to all goods', error);
    }
  }, []);

  const fiveGoods = useCallback(async () => {
    try {
      const loadedGoods = await get5First();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to five first goods', error);
    }
  }, []);

  const redGoods = useCallback(async () => {
    try {
      const loadedGoods = await getRedGoods();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to red goods', error);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={AllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
