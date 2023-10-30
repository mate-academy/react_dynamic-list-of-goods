import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleLoadFirstFive = () => {
    get5First().then(firstFiveGoods => setGoods(firstFiveGoods));
  };

  const handleLoadOnlyRed = () => {
    getRedGoods().then(onlyRedGoods => setGoods(onlyRedGoods));
  };

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
        onClick={handleLoadFirstFive}
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
