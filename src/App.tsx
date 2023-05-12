import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoodsPromise = (promise: Promise<Good[]>) => {
    promise
      .then((data) => {
        setGoods(data);
      });
  };

  const handleFiveFirstGoods = () => {
    handleGoodsPromise(get5First());
  };

  const allGoods = () => {
    handleGoodsPromise(getAll());
  };

  const redGoods = () => {
    handleGoodsPromise(getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => allGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFiveFirstGoods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => redGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
