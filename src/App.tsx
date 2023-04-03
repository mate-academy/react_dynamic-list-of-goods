import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(async () => {
    const goodsFromServer = await getAll();

    setGoods(goodsFromServer);
  }, []);

  const handleLoad5FirstGoods = useCallback(async () => {
    const goodsFromServer = await get5First();

    setGoods(goodsFromServer);
  }, []);

  const handleLoadOnlyRed = useCallback(async () => {
    const goodsFromServer = await getRedGoods();

    setGoods(goodsFromServer);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadOnlyRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
