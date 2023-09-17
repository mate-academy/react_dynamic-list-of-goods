import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onHandlerAllGoods = () => {
    getAll().then((newGoods: Good[]) => {
      setGoods(newGoods);
    });
  };

  const onHandler5Goods = () => {
    get5First().then((sortedGoods: Good[]) => {
      setGoods(sortedGoods.slice(0, 5));
    });
  };

  const onHandleRed = () => {
    getRedGoods().then((refGoods: Good[]) => {
      setGoods(refGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={onHandlerAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={onHandler5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onHandleRed}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};
