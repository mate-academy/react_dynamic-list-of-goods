import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getAllGoods = useCallback(async () => {
    const allGoods = await getAll();

    setVisibleGoods(allGoods);
  }, []);

  const get5FirstGoods = useCallback(async () => {
    const fiveFirstGoods = await get5First();

    setVisibleGoods(fiveFirstGoods);
  }, []);

  const onlyRedGoods = useCallback(async () => {
    const redGoods = await getRedGoods();

    setVisibleGoods(redGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onlyRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
