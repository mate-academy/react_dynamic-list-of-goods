import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleShowAll = async () => {
    const goodsFromServer = await getAll();

    setVisibleGoods(goodsFromServer);
  };

  const handleFirstFive = async () => {
    const goodsFromServer = await get5First();

    setVisibleGoods(goodsFromServer);
  };

  const handleShowRed = async () => {
    const goodsFromServer = await getRedGoods();

    setVisibleGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleShowAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleShowRed}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
