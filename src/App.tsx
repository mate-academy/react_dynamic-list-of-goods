import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getAllGoods() {
    getAll().then(setGoods);
  }

  function getFirst5Goods() {
    get5First().then(setGoods);
  }

  function getRedGoods() {
    getRed().then(setGoods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
