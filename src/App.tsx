import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const handleAll: React.MouseEventHandler<HTMLButtonElement> = () =>
    getAll().then(setGoods);
  const handleFirstFive: React.MouseEventHandler<HTMLButtonElement> = () =>
    get5First().then(setGoods);
  const handleReds: React.MouseEventHandler<HTMLButtonElement> = () =>
    getRed().then(setGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleReds}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
