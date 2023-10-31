import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    goodsAPI.getAll().then((sortedGoods) => {
      setGoods(sortedGoods);
    });
  };

  const handleFirstFiveGoods = () => {
    goodsAPI.get5First().then((sortedGoods) => {
      setGoods(sortedGoods);
    });
  };

  const handleRedGoods = () => {
    goodsAPI.getRedGoods().then((sortedGoods) => {
      setGoods(sortedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
