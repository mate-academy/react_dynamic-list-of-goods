import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getAllHandler() {
    return async () => setGoods(await getAll());
  }

  function get5FirstClick() {
    return async () => setGoods(await get5First());
  }

  function getRedHandler() {
    return async () => setGoods(await getRed());
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllHandler()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstClick()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedHandler()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
