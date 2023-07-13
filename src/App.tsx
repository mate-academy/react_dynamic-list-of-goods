import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then();
  }, []);

  const handleAll = () => {
    return getAll().then((goodsData) => setGoods(goodsData));
  };

  const handleFive = () => {
    return get5First().then((goodsData) => setGoods(goodsData));
  };

  const handleRed = () => {
    return getRedGoods().then((goodsData) => setGoods(goodsData));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
