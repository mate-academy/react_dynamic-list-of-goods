import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const loadAllHandler = async () => {
    setGoods(await getAll());
  };

  const load5FirstHandler = async () => {
    setGoods(await get5First());
  };

  const loadRedHandler = async () => {
    setGoods(await getRed());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadAllHandler()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => load5FirstHandler()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadRedHandler()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
