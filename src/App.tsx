import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getAllGoods() {
    getAll().then(setGoods);
  }

  function getFirst5Goods() {
    get5First().then(setGoods);
  }

  function getRedOnlyGoods() {
    getRedGoods().then(setGoods);
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

      <button type="button" data-cy="red-button" onClick={getRedOnlyGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
