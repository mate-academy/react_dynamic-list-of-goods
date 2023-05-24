import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAll = useCallback(async () => {
    const goodsData = await getAll();

    setGoods(goodsData);
  }, []);

  const handleClickFirst5 = useCallback(async () => {
    const goodsData = await get5First();

    setGoods(goodsData);
  }, []);

  const handleClickReds = useCallback(async () => {
    const goodsData = await getRedGoods();

    setGoods(goodsData);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClickReds}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
